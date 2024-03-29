import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, parseEther } from 'ethers'
import DanyangABI from '../assets/abi.json';

const DanyangAddress = import.meta.env.VITE_CONTRACT_ADDRESS;


function BuyNFT() {
  const { isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  async function buyNFT() {
    if (!isConnected) throw Error('User disconnected')

    const ethersProvider = new BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()

    // The Contract object
    const DanyangContract = new Contract(DanyangAddress, DanyangABI, signer)
    const tx = await DanyangContract.buy({value: parseEther('0.01')})

    await tx.wait();
    console.log("Transaction Success");
  }

  return (
    <>
      <button onClick={buyNFT} className='primary'>구매하기</button>
    </>
  )
}

export default BuyNFT