
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

async function scrapeWithCheerio(url, selector) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return $(selector).map((_, el) => $(el).text().trim()).get();
}

async function scrapeWithPuppeteer(url, selector) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const data = await page.$$eval(selector, elements => elements.map(el => el.textContent.trim()));
    await browser.close();
    return data;
}

module.exports = { scrapeWithCheerio, scrapeWithPuppeteer };
