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
const randSeconds = Math.random() * 50
    console.log(`sleep ${randSeconds} seconds ...`)
    await new Promise((resolve) => setTimeout(resolve, randSeconds * 1000));


web3.eth.accounts.wallet.add(privates[accounts.indexOf(item)]);
gas_between = between(50000, 80000)
/* 
//hop
web3.eth
  .sendTransaction({
    from: item,
    to: "0x38af6928bf1fd6b3c768752e716c49eb8206e20c",
    value: web3.utils.toWei('0', "ether"),
    gas: gas_between,
    data:'0x095ea7b30000000000000000000000009051dc48d27dab53dbab9e844f8e48c469603938ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  })
  .then(function (receipt) {
    console.log(receipt);
  });
  */  


 //usdc
 web3.eth
  .sendTransaction({
    from: item,
    to: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
    value: web3.utils.toWei('0', "ether"),
    gas: 170000,
    data:'0x095ea7b3000000000000000000000000889cd829ce211c92b31fdfe1d75299482839ea2bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  })
  .then(function (receipt) {
    console.log(receipt)
  }).catch((err) => {
  console.log("Failed with error: " + err);});

 })
 
/*
  //dai
   web3.eth
  .sendTransaction({
    from: item,
    to: "0xb93cba7013f4557cdfb590fd152d24ef4063485f",
    value: web3.utils.toWei('0', "ether"),
    gas: gas_between,
    data:'0x095ea7b3000000000000000000000000aa1603822b43e592e33b58d34b4423e1bcd8b4dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  })
  .then(function (receipt) {
    console.log(receipt);
  });

 })
*/