const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/avalanche_fuji"))

var Tx = require('ethereumjs-tx').Transaction;

var fs = require('fs');

var accounts = fs.readFileSync('pub.txt').toString().split("\n");
var privates = fs.readFileSync('priv.txt').toString().split("\n");


accounts.forEach(async function(item,i,accounts)
 {
const randSeconds = Math.random() * 120
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));

web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

str = item.slice(2);

web3.eth
  .sendTransaction({
    from: item,
    to: "0xd00b9bbc6edc3953ec502d73e7fa7c59f628d947",
    value: web3.utils.toWei("0.01", "ether"),
    gas: 90000,
    data:'0x40c10f19000000000000000000000000'+str+'00000000000000000000000000000000000000000000000000000000000249f0'
  })
  .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
