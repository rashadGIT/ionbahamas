var express = require('express');
var router = express.Router();
var wallet = require('../models/wallet.js');
const cryptoCurrencies = require('cryptocurrencies');
var HashMap = require('hashmap');

router.post('/getSupportedVSCurrencies', async (req,res,next) => {
  const response = await wallet.getSupportedVSCurrencies();
  res.status(200).send(response);
});

router.post('/getCoinList', async (req,res,next) => {
  const response = await wallet.getCoinList();
  res.status(200).send(response);
});

router.post('/getExchanges', async (req,res,next) => {
  const response = await wallet.getExchanges();
  res.status(200).send(response);
});

router.post('/getExchangesList', async (req,res,next) => {
  const response = await wallet.getExchangesList();
  res.status(200).send(response);
});

router.post('/getEvents', async (req,res,next) => {
  const response = await wallet.getEvents();
  res.status(200).send(response);
});

router.post('/getCountries', async (req,res,next) => {
  const response = await wallet.getCountries();
  res.status(200).send(response);
});

router.post('/getTypes', async (req,res,next) => {
  const response = await wallet.getTypes();
  res.status(200).send(response);
});

router.post('/getExchangeRates', async (req,res,next) => {
  const response = await wallet.getExchangeRates();
  res.status(200).send(response);
});

router.post('/getGlobal', async (req,res,next) => {
  const response = await wallet.getGlobal();
  res.status(200).send(response);
});

router.post('/getTransactionHistory', async (req,res) => {
  const response = await wallet.getTransactionHistory(req.body.address)
  res.status((response.status) ? response.status : 200).send(response);
});

router.post('/getCurrentHoldingsList', async (req, res) => {
  if(req.session.user == undefined){
    res.status(401).send("Access denied");
    return;
  }
  const response = await wallet.getTransactionHistory(req.session.user.publicKey);
  if(response.status) {
    res.status(response.status).send(response);
    return;
  }
  const unique =  Array.from(new Set(response.map(x => x.symbol)));
  const activeSymbols = cryptoCurrencies.symbols();
  const uniqueActiveSymbols = unique.filter(value => activeSymbols.includes(value));
  var map = new HashMap();
  for(var i in uniqueActiveSymbols) map.set(uniqueActiveSymbols[i], response.filter(x => x.symbol == uniqueActiveSymbols[i]).map(x => x.value).reduce((a,b) => a + b, 0));
  const data = await wallet.getMarketCap(map);
  res.status((data.status) ? data.status : 200).send(data);
});

router.post('/getAllCoins', async (req, res, next) => {
  try{
    let list = await wallet.getAllCoins()
    if([401,403,500].includes(list.status)) {
      res.status(list.status).send(list);
      return;
    }
    res.status(200).send(list);
  }
  catch(error){
    next(error)
  }
})

module.exports = router;