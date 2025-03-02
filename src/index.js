#!/usr/bin/env node

const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const { program } = require("commander");
const createCsvWriter = require("csv-writer").createArrayCsvWriter;

// Function to scrape data
async function scrape(url, selector, method = "cheerio", output = "json", filename = "scraped-data") {
    let extractedData = [];

    if (method === "cheerio") {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        $(selector).each((_, element) => {
            extractedData.push($(element).text().trim());
        });
    } else if (method === "puppeteer") {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "domcontentloaded" });
        extractedData = await page.$$eval(selector, elements => elements.map(el => el.textContent.trim()));
        await browser.close();
    } else {
        console.error("Invalid method! Use 'cheerio' or 'puppeteer'.");
        return;
    }

    // Save output as JSON or CSV
    const dir = "./data";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    if (output === "json") {
        fs.writeJsonSync(`${dir}/${filename}.json`, extractedData, { spaces: 2 });
        console.log(`✅ Data saved as JSON: ${dir}/${filename}.json`);
    } else if (output === "csv") {
        const csvWriter = createCsvWriter({
            path: `${dir}/${filename}.csv`,
            header: ["Scraped Data"],
        });
        await csvWriter.writeRecords(extractedData.map(item => [item]));
        console.log(`✅ Data saved as CSV: ${dir}/${filename}.csv`);
    } else {
        console.error("Invalid output format! Use 'json' or 'csv'.");
    }
}

// CLI command
program
    .version("1.0.0")
    .description("A simple web scraper")
    .option("--url <url>", "Website URL to scrape")
    .option("--selector <selector>", "CSS selector to extract data")
    .option("--method <method>", "Scraping method (cheerio or puppeteer)", "cheerio")
    .option("--output <output>", "Output format (json or csv)", "json")
    .option("--filename <filename>", "Output filename", "scraped-data")
    .action(async (options) => {
        await scrape(options.url, options.selector, options.method, options.output, options.filename);
    });

program.parse(process.argv);

// Export function for programmatic use
module.exports = { scrape };
