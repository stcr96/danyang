import { useState } from 'react'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import DanyangABI from '../assets/abi.json'
import './GetJoinCode.css'

const DanyangAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

function GetJoinCode() {
  const { isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [ joinCode, setJoinCode ] = useState(null);

  const ethersProvider = new BrowserProvider(walletProvider);

  const getJoinCode = async () => {
    if (isConnected) {
      const signer = await ethersProvider.getSigner();
      const DanyangContract = new Contract(DanyangAddress, DanyangABI, signer);
      const result = await DanyangContract.getJoinCode();
      setJoinCode(result);
    }
  }

  return (
    <>
      <div className="code-container">
        <button type='button' className='primary' onClick={getJoinCode}>카카오톡 단체방 코드 받기</button>
        <p>{joinCode}</p>
      </div>
    </>
  )
}

export default GetJoinCode