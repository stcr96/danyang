import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, parseEther } from 'ethers'
import contractArtifact from '../artifacts/contracts/Danyang.sol/Danyang.json'

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;


function BuyNFT() {
  const { isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  // const [ balance, setBalance ] = useState(null)

  // async function getBalance() {
  //   const balance = await DanyangContract.balanceOf(address)
  //   setBalance(balance)
  //   console.log(balance)
  // }

  async function buyNFT() {
    if (!isConnected) throw Error('User disconnected')
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const DanyangContract = new Contract(contractAddress, contractArtifact.abi, signer);
      const tx = await DanyangContract.buy({value: parseEther('0.01')});

      await tx.wait();
      console.log(tx);
    } catch (err) {
      console.error(err);
      if (err.reason) alert(err.reason)
      else alert("Not enough Money");
    }
  }

  return (
    <>
      <button onClick={buyNFT} className='primary'>구매하기</button>
    </>
  )
}

export default BuyNFT