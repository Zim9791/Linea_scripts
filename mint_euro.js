const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/avalanche_fuji"))

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
const randSeconds = Math.random() * 120
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));

web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);



web3.eth
  .sendTransaction({
    from: item,
    to: "0xb14652c1b6e0c8a3beb1acbb864cc55b14f335ed",
    value: web3.utils.toWei('0', "ether"),
    gas: between(800000,100000),
    data:'0x196428c5'
  }).then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
