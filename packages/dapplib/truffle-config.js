require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note praise puppy half arm bubble gesture'; 
let testAccounts = [
"0x12e7c35e0ef61bd3a961b5e28f2d81313452944630108d65d60ec5f91a52ff24",
"0xbb9b6efc942ea6c87d0444f43e42af6a151dc893e66f043e0a5dd9bc93cdfeaf",
"0xe7e2aefff58c2083e40b3304ad7ea3d6f8fe58c773c7f4ca7cb54d008864f2fa",
"0x8521b2efdfdc6562f228ab3b06f27caf1c4a005f5ad232081254d5548350e8bc",
"0xc21857cba6969a213ba89af9b3ee4b07762025229c9acc9a1bf9729d5df1aa79",
"0xbf44c11bc2c256dd040ea6206a27be7ce2fe8628fdecf7f7e5ce84c6b94fdf26",
"0xd715adefc2dfa0b7c286b2f12415aec3698adf03ba1cb9303b5584bc569d544c",
"0x755af8f432bc4cd8a67c7349a70114d33a96f97bdb016800a76fd223febefcb5",
"0xb8a7486952428c2cf347b6f252d78c6e2a0e356019cd4f884bca39aa6f5ac15b",
"0x4cec041b608e9387882570dca88d1fe97a54e273b967f15de20de4b089c96489"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


