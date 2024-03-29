import { Link } from 'react-router-dom'
import danyangLogo from '/danyang.svg'
import './Header.css';

function Header() {
  return (
    <header>
      <nav className='header-nav'>
        <Link to='/'><h1 className='header-brand'><img src={danyangLogo} alt="Danyang" /></h1></Link>
        <ul className='header-menu'>
          <Link to="/about"><li>둘러보기</li></Link>
          <Link to="/marketplace"><li>다민되기</li></Link>
          <Link to="https://open.kakao.com/o/gSjl1meg"><li>참여하기</li></Link>
        </ul>
        {/* <Link to='/profile'><img src={profileLogo} alt="profile logo" /></Link> */}
      </nav>
      <w3m-button />
    </header>
  )
}

export default Header