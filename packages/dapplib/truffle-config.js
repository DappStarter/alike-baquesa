require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stomach cost shift protect inflict another army gate'; 
let testAccounts = [
"0x2ec6a90ef38d4b495baa3e4fdd9bda85a591c1c313859f7ea6148150e1114955",
"0x06dec9887059d2437b9567c4f3c8d481dbc0bb97d70e604eb50dade9493679b2",
"0xef8f6426c098d1f337fdebd13bc99b36edcc19fdcd9d1c393018579f235ee27f",
"0xdcb15106c995a0399f6c9ce1deae697d2871e3422feb0f8fd30502d48e670ba1",
"0x315cfe32f8468d5b6613d735be374d3873fed2663b9f39a5de2362937792df72",
"0xa907decde6f6cccf19e5ccdfbe0665c28e2be5320cc74c526f0863a582c05644",
"0xb00901b8c1510d67abc955900cfe20a6cdf46ce9888ca07605bb5a2eb6e79c88",
"0x578abcf9e36ec63b390d07a46675351f25522c5bdf90cdcd744559d99fa7b54e",
"0xb5ba2f7aaa9a8b185e8a9aa53fab93d929ca2bf8beeb3104d51c284abb5052b3",
"0x5d781d30cee8376163d777bc638d9164768d62cdbfdbf89e415b45bdd63a2e84"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
