const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.blockpi.network/v1/rpc/public"))

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
const randSeconds = Math.random() * 110
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));
wallet_addr = item.slice(2);




web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

gas_between = between(80000, 93000)

var method='0x40c10f19';
var mint_account='000000000000000000000000'+wallet_addr
datasent=method+mint_account+'0000000000000000000000000000000000000000000000000000000005f5e100'


web3.eth
  .sendTransaction({
    from: item,
    to: "0xfad6367e97217cc51b4cd838cc086831f81d38c2",
    value: web3.utils.toWei('0.05', "ether"),
    gas: gas_between,
    data:datasent
  })
  .then(function (receipt) {
    console.log(receipt);
  });

 })
