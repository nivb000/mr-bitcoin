import axios from 'axios'
export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    getCurrenices
}

async function getRate(currency) {
    const rates = await _getAllRates()
    return rates[currency]
}

async function _getAllRates() {
    let res = await axios.get('https://blockchain.info/ticker')
    return res.data
}
// async function _getAllRates() {
//     let rates = _loadFromStorage('rates')
//     if(!rates) {
//         let res = await axios.get('https://blockchain.info/ticker')
//         rates = res.data
//         _saveToStorage('rates',rates)
//     }
//     return rates
// }

async function getMarketPriceHistory() {
    let prices = _loadFromStorage('MARKET_PRICES')
    if (!prices) {
        let res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        prices = res.data
        _saveToStorage('MARKET_PRICES', prices)
    }
    return prices
}
async function getAvgBlockSize() {
    let avgBlockSize = _loadFromStorage('AVG_BLOCK_SIZE')
    if (!avgBlockSize) {
        let res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        avgBlockSize = res.data
        _saveToStorage('AVG_BLOCK_SIZE', avgBlockSize)
    }
    return avgBlockSize
}

async function getCurrenices() {
    let rates = await _getAllRates()
    const currencies = []
    for (let rate in rates) {
        currencies.push(rate)
    }
    return currencies
}





function _saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}
function _loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}