require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
        url: 'https://eth-ropsten.alchemyapi.io/v2/HLHGBogU7ZXnGQ7TzMm4q73_cOL_EL1h',
        accounts: ['bd4975aa74f5d5ee6e7b95232f924bb97ddf14fc40f1dda07065a17429493f55'],
        },
    },
};