let ethers = require('ethers');

// Contract JSON file
let WhizKids = require('./WhizKids.json');

let SMART_CONTRACT_ADDR = "0x38785c2755c71fb2779b20a51ca5bfe66d725301"
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
  
  // TODO: Add error handling for when the user doesn't give us
  // at least 0.5 ETH.

  const ops = {
    value: ethers.utils.parseEther('0.5'),
  };

  await contract.mint(signerAddress, ops);
  console.log('minted');
}

/**
 * Event listener for the button.
 */
document.getElementById('mint-button').addEventListener('click', async () => {
  if (!window.ethereum) {
    alert('Install Metamask to mint NFTs');
    return;
  }

  const chainId = await window.ethereum.request({method: 'eth_chainId'});
  if (chainId == '0x4'){
    mintToWalletAddress();
  } else {
    alert('You need to connect Rineby testnet to mint.');
    return;
  }
});