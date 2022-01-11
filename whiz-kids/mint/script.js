let ethers = require('ethers');

// Contract JSON file
let WhizKids = require('./WhizKids.json');

let SMART_CONTRACT_ADDR = "0xb8d72d1f1b98bd2e1e81c05b31a9f53125e7e0ba"
/**
 * Prints WK smart contract info given a smart
 * contract address to the console's log.
 * @param {string} smartContractAddress the address of the
 * smart contract.
 */
async function logSmartContractInfo(smartContractAddress) {
  console.log(window.ethereum);
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner()
  //const signer = provider.getSigner();
  //console.log(await signer.getAddress);
  // const contract = new ethers.Contract(
  //   smartContractAddress,
  //   WhizKids.abi,
  //   signer,
  //   );

  // print(contract);
}

/**
 * Event listener for the button.
 */
document.getElementById('csc').addEventListener('click', () => {
  logSmartContractInfo(SMART_CONTRACT_ADDR);
});