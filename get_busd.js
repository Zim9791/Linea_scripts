const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s3.binance.org:8545	"))

var Tx = require('ethereumjs-tx').Transaction;

var fs = require('fs');

var accounts = fs.readFileSync('pub.txt').toString().split("\n");
var privates = fs.readFileSync('priv.txt').toString().split("\n");



accounts.forEach(function(item,i,accounts)
 {


web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

web3.eth
  .sendTransaction({
    from: item,
    to: "0x265b25e22bcd7f10a5bd6e6410f10537cc7567e8",
    value: web3.utils.toWei("0", "ether"),
    gas: 90000,
    data:'0x428dc45100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000eb3eb991d39dac92616da64b7c6d5af5ccff1627'
  })
 .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
