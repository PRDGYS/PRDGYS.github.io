let ethers = require('ethers');

// Contract JSON file
let WhizKids = require('./WhizKids.json');

let SMART_CONTRACT_ADDR = "0xb8d72d1f1b98bd2e1e81c05b31a9f53125e7e0ba"
/**
 * Mints token given a specific address.
 * @param {string} walletAddress the address to mint the
 * token to.
 */
async function mintToWalletAddress() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const contract = new ethers.Contract(
    SMART_CONTRACT_ADDR,
    WhizKids.abi,
    signer,
    );
  
  await contract.mint(signerAddress);
  console.log('minted');
}

/**
 * Event listener for the button.
 */
document.getElementById('mint-button').addEventListener('click', () => {
  mintToWalletAddress();
});