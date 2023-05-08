const Web3 = require("web3")
const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s3.binance.org:8545"))
var Tx = require('ethereumjs-tx').Transaction;

var fs = require('fs');
var accounts = fs.readFileSync('pub.txt').toString().split("\n");
var privates = fs.readFileSync('priv.txt').toString().split("\n");

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

accounts.forEach(async function(item,i,accounts)
{


const randSeconds = Math.random() * 20
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));

web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

gas_between = between(50000, 80000)
datasent='0x095ea7b300000000000000000000000062d06e1e3c6c202b60be4c0e03ea8d6fca88165fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
web3.eth
  .sendTransaction({
    from: item,
    to: "0xeb3eb991d39dac92616da64b7c6d5af5ccff1627",
    value: web3.utils.toWei('0', "ether"),
    gas: gas_between,
    data:datasent
  })
  .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
