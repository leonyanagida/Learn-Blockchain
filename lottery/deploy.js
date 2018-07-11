const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const mnemonic = // PASTE MNEMONIC HERE (DO NOT SHARE TO OTHERS) // ;
const infuraLink = // PASTE INFURA LINK HERE // ;

const provider = new HDWalletProvider(
  mnemonic, 
  infuraLink
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attemting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    // Add the '0x' before the bytecode or else it will convert 
    // the whole string to hexadecimal, which will be double the 
    // size and throw the gas error.
    .deploy({ data: '0x' + bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log(interface)
    console.log('Contract deployed to...', result.options.address);
};

deploy();