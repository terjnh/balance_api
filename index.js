const express = require('express');
const axios = require('axios')
const app = express()
const port = 3000

const axiosInstance = axios.create({
  baseURL: 'https://www.bitstamp.net/api/v2/ticker_hour'
});

let btcusd_last = 0;
let ethusd_last = 0;


const userBalances = {
  "user-1": {
    "BTC": "0.5",
    "ETH": "2"
  },
  "user-2": {
    "BTC": "0.1",
  },
  "user-3": {
    "ETH": "5",
  },
}


function userBalance(user) {
  let userBalance;
  if (!userBalances[user]["BTC"])
    userBalance = userBalances[user]['ETH'] * ethusd_last
  else if (!userBalances[user]["ETH"])
    userBalance = userBalances[user]['BTC'] * btcusd_last
  else
    userBalance = (userBalances[user]['BTC'] * btcusd_last) + (userBalances[user]['ETH'] * ethusd_last)
  
  // userBalance = Math.round(num*100)/100;
  console.log(user, "balance:", userBalance);
}


app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

// get btc-usd pair
app.get('/btcusd', async (req, res, next) => {
  res.send('BTC-USD received')
  try {
    const response = await axiosInstance.get('/btcusd');
    // process your data and send back to the user
    btcusd_last = response.data.last;
    console.log("BTC-USD pair:", response.data.last);
  } catch (error) {
    // handle if you got an error
    console.log("BTC-USD pair error")
  }
})

// get eth-usd pair
app.get('/ethusd', async (req, res, next) => {
  res.send('ETH-USD received')
  try {
    const response = await axiosInstance.get('/ethusd');
    // process your data and send back to the user
    ethusd_last = response.data.last;
    console.log("ETH_USD pair:", response.data.last);
  } catch (error) {
    // handle if you got an error
    console.log("ETH_USD pair error")
  }
})

// get eth-usd & btc-usd pair
app.get('/ethbtc_usd', async (req, res, next) => {
  res.send('BTC-USD & ETH-USD received')
  try {
    const btc_res = await axiosInstance.get('/btcusd');
    const eth_res = await axiosInstance.get('/ethusd');
    // process your data and send back to the user
    btcusd_last = btc_res.data.last;
    ethusd_last = eth_res.data.last;
    console.log("BTC_USD pair:", btc_res.data.last)
    console.log("ETH_USD pair:", eth_res.data.last);

    userBalance("user-1")
    userBalance("user-2")
    userBalance("user-3")

  } catch (error) {
    // handle if you got an error
    console.log("/ethbtc_usd response error")
  }
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

