import { Link } from 'react-router-dom'
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import danyangLogo from '/danyang.svg'
import userLogo from '../assets/user.svg'
import './Header.css';

function Header() {
  const { isConnected } = useWeb3ModalAccount();

  return (
    <header>
      <nav className='header-nav'>
        <Link to='/'>
          <div className="header-brand">
            <img src={danyangLogo} alt="Danyang" />
            <h1>Danyang</h1>
          </div>
        </Link>
        <ul className='header-menu'>
          <Link to="/about"><li>둘러보기</li></Link>
          <Link to="/marketplace"><li>다민되기</li></Link>
          <Link to="https://open.kakao.com/o/gSjl1meg"><li>참여하기</li></Link>
        </ul>
        {/* <Link to='/profile'><img src={profileLogo} alt="profile logo" /></Link> */}
      </nav>
      <div className="header-profile">
        <w3m-button />
        {isConnected ? 
        <Link to='/profile'>
          <img src={userLogo} alt="" />
        </Link> : <></> }
      </div>
    </header>
  )
}

export default Header