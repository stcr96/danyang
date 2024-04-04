import { useEffect, useState } from 'react'
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import DanyangABI from '../assets/abi.json'
import danyanggun from '../assets/danyanggun.gif'
import './ProfileCard.css'

const DanyangAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const DanyangGovernorAddress = import.meta.env.VITE_GOVERNOR_CONTRACT_ADDRESS;

function ProfileCard() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [ credential, setCredential ] = useState([]);
  const [ image, setImage ] = useState();
  const [ holder, setHolder ] = useState();
  const [ timestamp, setTimestamp ] = useState();
  
  useEffect(() => {
    const getCredential = async () => {
      if (!isConnected) throw Error('User Disconnected');
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
  
      const DanyangContract = new Contract(DanyangAddress, DanyangABI, signer);
      const credential = await DanyangContract.getCredential();
      
      setCredential(credential);
    };
    getCredential();
  }, [isConnected, walletProvider])
  

  useEffect(() => {
    const getHolder = async () => {
      const holder = credential[3].slice(0, 4) + "..." + credential[3].slice(-6);
      setHolder(holder);
    }
    getHolder();

    const getImage = async () => {
      const metadataUrl = credential[1];
      const response = (await fetch(metadataUrl)).json();
      response
        .then(result => setImage(result.image))
        .catch(err => console.error(err));
    }
    getImage();

    const getDate = async () => {
      const epochDate = new Date(Number(credential[4])*1000);
      const issueDate = epochDate.getFullYear() + ". " + (epochDate.getMonth() + 1) + ". " + epochDate.getDate();
      setTimestamp(issueDate);
    }
    getDate();
  }, [credential])

  return (
    <>
      <div className="resident-card">
        <div className="resident-card-top">
          <img src={danyanggun} alt="danyanggun-logo" className='danyanggun-logo' />
          <div>
            <h1 className="resident-info-title">디지털 주민등록증</h1>
            <h1 className='resident-info-address'>
              {holder}
            </h1>
            <h3>Token Id: {Number(credential[0])}</h3>
            <h3>Chain Id: {chainId}</h3>
          </div>
          <div className="resident-img-wrapper">
            <img src={image} alt="" className='resident-img' />
          </div>
        </div>

        <div className="resident-card-bottom">
          <h3>{timestamp}</h3>
          { credential[2] == DanyangGovernorAddress ? (
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
    </>
  )
}

export default ProfileCard