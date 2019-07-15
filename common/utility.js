const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const utility = {
    writeCSV: async function (priceBTC) {
        const csvWriter = await createCsvWriter({
            path: 'out.csv',
            header: [
                { id: 'time', title: 'time' },
                { id: 'closePrice', title: 'closePrice' }
            ]
        });
        await csvWriter.writeRecords(priceBTC)
            .then(() => console.log('The CSV file was written successfully'));
    }
}

module.exports = utility