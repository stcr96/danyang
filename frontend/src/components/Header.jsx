import { Link } from 'react-router-dom'
import profileLogo from '../assets/profile.svg'
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <nav className='header-nav'>
          <Link to='/'>Danyang</Link>
          <div className='header-menu'>
            <Link to="/about">알아보기</Link>
            <Link to="/products">다민되기</Link>
            <Link to="https://open.kakao.com/o/gSjl1meg">참여하기</Link>
          </div>
          <w3m-button />
          <Link to='/profile'><img src={profileLogo} alt="profile logo" /></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header