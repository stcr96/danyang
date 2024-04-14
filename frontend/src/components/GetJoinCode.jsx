import { useState } from 'react'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import contractArtifact from '../artifacts/contracts/Danyang.sol/Danyang.json'
import './GetJoinCode.css'

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

function GetJoinCode() {
  const { isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [ joinCode, setJoinCode ] = useState(null);

  const ethersProvider = new BrowserProvider(walletProvider);

  const getJoinCode = async () => {
    if (isConnected) {
      const signer = await ethersProvider.getSigner();
      const DanyangContract = new Contract(contractAddress, contractArtifact.abi, signer);
      const result = await DanyangContract.getJoinCode();
      setJoinCode(result);
    }
  }

  return (
    <>
      <div className="joincode-container">
        <h2 className="profilepage-title">단양 커뮤니티</h2>
        <div className="joincode-content">
          <button type='button' className='primary' onClick={getJoinCode}>카카오톡 단체방 코드 받기</button>
          <span id='joincode'>{joinCode}</span>
          <p className='warning'><small>※ 경고: 이 코드를 노출하지 마세요. NFT를 구매하지 않은 사람이 참여코드로 단양 커뮤니티에 들어오게 될 수 있습니다.</small></p>
        </div>
      </div>
    </>
  )
}

export default GetJoinCode