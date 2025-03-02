📌 README.md for Scraper Simplifier

# Scraper Simplifier 🚀

[![npm](https://img.shields.io/npm/v/scraper-simplifier)](https://www.npmjs.com/package/scraper-simplifier)
[![npm downloads](https://img.shields.io/npm/dt/scraper-simplifier)](https://www.npmjs.com/package/scraper-simplifier)
[![GitHub stars](https://img.shields.io/github/stars/Adilsheikhh/scraper-simplifier?style=social)](https://github.com/Adilsheikhh/scraper-simplifier)


A lightweight web scraping tool that extracts data from websites and exports it as JSON or CSV.

## 🚀 **Quick Installation**  

You can install Scraper Simplifier using **npm**:

```sh
npm install -g scraper-simplifier

📖 Usage
CLI Usage

You can run the scraper directly from the command line:

scraper-simplifier --url="https://example.com" --selector="h1" --method="cheerio" --output="json" --filename="example"

Programmatic Usage (Node.js API)

You can also use it inside your Node.js project:

const { scrape } = require("scraper-simplifier");

(async () => {
    await scrape("https://example.com", "h1", "cheerio", "json");
})();

✨ Features

✅ Supports Cheerio & Puppeteer (for JavaScript-heavy pages)
✅ Exports data as JSON or CSV
✅ Handles pagination seamlessly
✅ Easy-to-use CLI interface
✅ Saves extracted data into a file automatically
✅ Proxy support to avoid rate-limiting
✅ Google Sheets & Excel integration
✅ Cloud storage support (Google Drive, etc.)
✅ Real-time dashboards (React-based UI for monitoring)
🔧 Options & Arguments
Option	Description	Default Value
--url	The target URL to scrape.	Required
--selector	The CSS selector to extract content from.	Required
--method	The scraping method (cheerio or puppeteer).	cheerio
--output	Output format (json or csv).	json
--filename	The name of the output file (saved in the current dir).	scraped

Example:

scraper-simplifier --url="https://example.com" --selector="p" --method="puppeteer" --output="csv" --filename="data"

📂 File Output Example
JSON Output (scraped.json)

[
    {
        "text": "Example Heading"
    },
    {
        "text": "Another Heading"
    }
]

CSV Output (scraped.csv)

text
Example Heading
Another Heading

📜 Licensing

This package is MIT Licensed. Always ensure compliance with website terms of service before scraping.

Google Inc. OFL-1.1
🔥 Contributing

If you have ideas for performance improvements or new features, feel free to star ⭐ and contribute on GitHub!

🔗 GitHub Repository: https://github.com/adilsheikhh/scraper-simplifier
📜 Changelog & Versioning

    v1.0.0 - Initial release 🎉
    v1.0.1 - Added README and improved CLI options
    v1.1.0 - Introduced Puppeteer support & pagination handling

You can track all changes in the Changelog.
🛠 Built & Signed On

Built with ❤️ using GitHub Actions

🔗 View build summary