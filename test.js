const { scrape } = require("./src/index");

(async () => {
    await scrape("https://www.npmjs.com/", "h2", "cheerio", "json", "example-data");
    await scrape("https://www.npmjs.com/", "img", "puppeteer", "csv", "paragraphs");
})();
