const { usdnABI } = require('./abis');

async function getWstEthPrice() {
  const prices = (
    await utils.getData(
      `https://coins.llama.fi/prices/current/${chainString}:${WSTETH_TOKEN_ADDRESS}`
    )
  ).coins;
  const wstEth = prices[`${chainString}:${WSTETH_TOKEN_ADDRESS}`]?.price || 0;
}

/**
 * The USDN APR is calculated as follows:
 * const apr =
      (((first.divisor *
        first.totalSupply *
        last.vaultAssetAvailableWithFunding *
        last.wstEthPrice *
        BIGINT_10_POW_18) /
        (last.divisor * last.totalSupply * first.vaultAssetAvailableWithFunding * first.wstEthPrice) -
        BIGINT_10_POW_18) *
        BigInt(YEAR)) /
      (last.blockTimestamp - first.blockTimestamp);
 */
async function computeUsdnApr() {
  // TODO: Implement the function to compute the USDN APR
  return 0;
}

function usdnDivisor() {
  return sdk.api.abi.call({
    target: USDN_TOKEN_ADDRESS,
    abi: usdnABI,
    chain: chainString,
    method: 'divisor',
  });
}

function usdnTotalSupply() {
  return sdk.api.abi.call({
    target: USDN_TOKEN_ADDRESS,
    abi: usdnABI,
    chain: chainString,
    method: 'totalSupply',
  });
}

function usdnVaultAssetAvailableWithFunding() {
  return sdk.api.abi.call({
    target: USDN_TOKEN_ADDRESS,
    abi: usdnABI,
    chain: chainString,
    method: 'vaultAssetAvailableWithFunding',
  });
}

module.exports = {
  getWstEthPrice,
};
