const request = require('request');
const moment = require('moment')
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
const utility = require('../common/utility')

const feedBTC = {
    price: async function (req, res) {
        cc.setApiKey('618d60f7af3ea751b476a88cc27c7dbcd845ac04801f4fe0281000d6f31a249f')
        let priceBTC = []
        await cc.histoMinute('BTC', 'USD', { limit: (req.query.limit) ? req.query.limit : "100"}).then(data => {
            for (let p of data) {
                let price = {}
                price.time = moment.unix(p.time).format("DD/MM/YYYY HH:mm:ss")
                price.closePrice = p.close
                priceBTC.push(price)
            }
        }).catch(console.error)
        await utility.writeCSV(priceBTC)
        res.download("./out.csv");
    }

}
module.exports = feedBTC;



