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
gas_between = between(50000, 80000)


datasent='0x095ea7b30000000000000000000000009fe7497ef6243649212b0ba3e185d75e14f1f1e7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
//console.log(data)

web3.eth
  .sendTransaction({
    from: item,
    to: "0xa089a21902914c3f3325dbe2334e9b466071e5f1",
    value: web3.utils.toWei('0', "ether"),
    gas: gas_between,
    data:datasent
  })
  .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});
 

 })
