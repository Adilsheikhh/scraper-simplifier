const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

async function exportToCSV(data, filePath) {
    const csvWriter = createCsvWriter({
        path: filePath,
        header: [{ id: "text", title: "Text Data" }],
    });

    await csvWriter.writeRecords(data.map((text) => ({ text })));
    console.log(`✅ CSV file saved at ${filePath}`);
}

async function exportToJSON(data, filePath) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ JSON file saved at ${filePath}`);
}

module.exports = { exportToCSV, exportToJSON };
