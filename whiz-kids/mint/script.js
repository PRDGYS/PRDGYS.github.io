let ethers = require('ethers');

// Contract JSON file
let WhizKids = require('./WhizKids.json');

let SMART_CONTRACT_ADDR = "0xb8d72d1f1b98bd2e1e81c05b31a9f53125e7e0ba"
/**
 * Prints WK smart contract info given a smart
 * contract address to the console's log.
 * @param {string} walletAddress the address to mint the
 * token to.
 */
async function mintToWalletAddress(walletAddress) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  const contract = new ethers.Contract(
    SMART_CONTRACT_ADDR,
    WhizKids.abi,
    signer,
    );


    console.log(contract);
}

/**
 * Event listener for the button.
 */
document.getElementById('csc').addEventListener('click', () => {
  mintToWalletAddress(document.getElementById('wallet-id').value);
});