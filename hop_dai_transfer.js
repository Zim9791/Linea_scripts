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
const randSeconds = Math.random() * 120
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));


wallet_addr = item.slice(2);
var precision=10;


hex_time = Math.floor((Date.now()/ 1000+7 * 24 * 60 * 60)).toString(16);




web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);

//gas_between = between(1000000, 1100000)

var method='0xdeace8f5';
var address_token='000000000000000000000000eb3eb991d39dac92616da64b7c6d5af5ccff1627'
var chain_id='000000000000000000000000000000000000000000000000000000000000e704'
var am='0000000000000000000000000000000000000000000000008ac7230489e80000'
var amoutmin='0000000000000000000000000000000000000000000000008a1580485b230000'
var nonce='00000000000000000000000000000000000000000000000000000'+hex_time
var mint_account='000000000000000000000000'+wallet_addr
var address_relayer='000000000000000000000000b47de784ab8702ec35c5eab225d6f6ce476ddd28'
var rel_fee='0000000000000000000000000000000000000000000000000000000000000000'


var lenght=hex_time.length;

var zeros=''
 for(var i = 0; i < 64-lenght;i++)
 {
 zeros=zeros+'0'
 }

var hex_time_send=zeros+hex_time

datasent=method+chain_id+mint_account+am+amoutmin+hex_time_send+address_relayer+rel_fee


web3.eth
  .sendTransaction({
    from: item,
    to: "0xaa1603822b43e592e33b58d34b4423e1bcd8b4dc",
    value: web3.utils.toWei('0.01', "ether"),
    gas: 170000,
    data:datasent
  }).then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
