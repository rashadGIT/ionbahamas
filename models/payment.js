"use strict";
require('dotenv').config();
const axios = require('axios');
var dateFormat = require('dateformat');
var dateFormat = require('dateformat');

exports.getSupportedVSCurrencies = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/simple/supported_vs_currencies')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getCoinList = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/coins/list')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getExchanges = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/exchanges')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getExchangesList = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/exchanges/list')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getEvents = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/events')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getCountries = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/events/countries')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getTypes = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/events/types')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getExchangeRates = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/exchange_rates')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getGlobal = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/global')
    .then(x => x.data)
    .catch(err => {
        return {
            status : 500,
            msg : 'Error: No Response'
            }; 
    })
}

exports.getTransactionHistory = async (address) => {
        return await axios.get(process.env.etherScanURL+'?module=account&action=tokentx&address='+address+'&startblock=0&endblock=999999999&sort=asc&apikey='+process.env.apikey)
        .then(x => {
          var val = [];
          x.data.result.forEach((value) => {
            val.push({
              id : value.blockNumber,
              date : dateFormat(new Date(Number(value.timeStamp) * 1000), "dd-mm-yyyy"),
              token : value.tokenName,
              value : (value.value/1000000000000000000),
              toAddress : value.to,
              fromAddress : value.from,
              txHash : value.hash,
              symbol : value.tokenSymbol
            })
        });
          return val;
        })
        .catch(err => {
            return {
            status : 500,
            msg : 'Error: No Response'
            }; 
        });
}

exports.getMarketCap = async (map) => {
    return await axios.get(process.env.CoinMarketCapURL+'?symbol='+map.keys().join()+'&convert=USD&CMC_PRO_API_KEY='+process.env.CoinMarketCapKey)
    .then(x => {
        let arr = [];
        const obj = x.data.data;
        for (var key in obj) {
            arr.push({
                id : obj[key].id,
                name : obj[key].name,
                symbol : key,
                token : key, 
				total_amount : (obj[key].quote.USD.price * map.get(key)),
				token_amount : map.get(key),
                price_usd : obj[key].quote.USD.price,
                percent_change_1h : obj[key].quote.USD.percent_change_1h,
                percent_change_24h : obj[key].quote.USD.percent_change_24h,
            });
        }
        return arr;
    })
    .catch(err => {
        return {
            status : 500,
            msg : "Internal Server Error"
        }
    });
}

exports.getAllCoins = async () => {
    return await axios.get(process.env.coinGeckoApiURL + '/coins/list')
    .then(x =>  { 
        return {
            statusText : x.statusText,
            status : x.status,
            data : x.data
        }
    })
    .catch(err => console.log(err))
}