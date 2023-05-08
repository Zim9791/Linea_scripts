const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s3.binance.org:8545	"))

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
const randSeconds = Math.random() * 210
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));


wallet_addr = item.slice(2);
var precision=10;
//amount2 =Math.floor((Math.random()*(10 *precision-1*precision)+1*precision)/(1*precision))
amount = between(15,25)
console.log(amount)

var weiValue = await web3.utils.toWei(amount.toString(), 'ether')

var amount_send_hex = await web3.utils.toHex(weiValue);

hex_time = Math.floor(Date.now()).toString(16);




web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

gas_between = between(80000, 93000)

var method='0x23463624';
var address_token='000000000000000000000000eb3eb991d39dac92616da64b7c6d5af5ccff1627'
var chain_id='000000000000000000000000000000000000000000000000000000000000e704'
var nonce='00000000000000000000000000000000000000000000000000000'+hex_time
var mint_account='000000000000000000000000'+wallet_addr
var lenght=amount_send_hex.slice(2).length;

var zeros=''
 for(var i = 0; i < 64-lenght;i++)
 {
 zeros=zeros+'0'
 }

var amount_to_send=zeros+amount_send_hex.slice(2)

datasent=method+address_token+amount_to_send+chain_id+mint_account+nonce


web3.eth
  .sendTransaction({
    from: item,
    to: "0x62d06e1e3c6c202b60be4c0e03ea8d6fca88165f",
    value: web3.utils.toWei('0', "ether"),
    gas: gas_between,
    data:datasent
  })
  .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
