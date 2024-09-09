import { useEffect, useState } from 'react'
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import contractArtifact from '../artifacts/contracts/Danyang.sol/Danyang.json'
import danyanggun from '../assets/danyanggun.gif'
import './ProfileCard.css'

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const governorContractAddress = import.meta.env.VITE_GOVERNOR_CONTRACT_ADDRESS;

function ProfileCard() {
  const { chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [ credential, setCredential ] = useState([]);
  const [ tokenId, setTokenId ] = useState(null);
  const [ image, setImage ] = useState(null);
  const [ issuer, setIssuer ] = useState(null);
  const [ holder, setHolder ] = useState(null);
  const [ timestamp, setTimestamp ] = useState(null);
  
  useEffect(() => {
    const getCredential = async () => {
      if (!isConnected) throw Error('User Disconnected');
      try {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();
    
        const DanyangContract = new Contract(contractAddress, contractArtifact.abi, signer);
        const credential = await DanyangContract.getCredential();
        // console.log(credential);
        
        setCredential(credential);
      } catch (err) {
        console.error(err);
      }
    };
    getCredential();
  }, [isConnected, walletProvider])
  

  useEffect(() => {

    const getInfo = async () => {
      try {
        const tokenId = Number(credential[0]);
        const metadataUrl = credential[1];
        const issuer = credential[2];
        const holder = String(credential[3]).slice(0,4) + '...' + String(credential[3]).slice(-6);
        const epochDate = new Date(Number(credential[4])*1000);
        const issueDate = epochDate.getFullYear() + ". " + (epochDate.getMonth() + 1) + ". " + epochDate.getDate();
        // console.log(metadataUrl);
        const response = await fetch(metadataUrl)
        const result = await response.json();
        
        setTokenId(tokenId);
        setImage(result.image);
        setIssuer(issuer);
        setHolder(holder);
        setTimestamp(issueDate);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, [credential])

  return (
    <>
      { 
        !tokenId ?
        <div className="no-resident-card">
          <h2 className='profilepage-title'>아직 단양 디지털 주민이 아닙니다</h2>
          <p>단양팔경 NFT를 구매하고 디지털 주민이 되어보세요</p>
        </div>  :
        <div className="resident-card">
          <div className="resident-card-top">
            <img src={danyanggun} alt="danyanggun-logo" className='danyanggun-logo' />
            <div>
              <h1 className="resident-info-title">디지털 주민등록증</h1>
              <h1 className='resident-info-address'>
                {holder}
              </h1>
              <h3>Token Id: {tokenId}</h3>
              <h3>Chain Id: {chainId}</h3>
            </div>
            <div className="resident-img-wrapper">
              <img src={image} alt="" className='resident-img' />
            </div>
          </div>

          <div className="resident-card-bottom">
            <h3>{timestamp}</h3>
            { issuer == governorContractAddress ? (
            <h2>
              Danyang DAO
            </h2>
            ) : (
            <h2>
              Invalid Issuer
            </h2>
            ) }
          </div>
        </div>
      }
    </>
  )
}

export default ProfileCard