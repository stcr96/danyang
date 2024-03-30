import { Link } from 'react-router-dom';
import danyangLogo from '/danyang.svg'
import discordLogo from '../assets/discord.svg';
import twitterLogo from '../assets/twitter.svg';
import githubLogo from '../assets/github.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <h1 className="footer-brand">
          <img src={danyangLogo} alt="Danyang" />
        </h1>
        
        <div className="footer-menu-container">
          <ul className='footer-menu'>
            <li className='footer-menu-title'>
              <h3>About</h3>
            </li>
            <Link to='/about'>
              <li>Danyang</li>
            </Link>
            <li>DAO</li>
            <li>NFTs</li>
          </ul>
          <ul className='footer-menu'>
            <li className='footer-menu-title'>
              <h3>Support</h3>
            </li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
          <ul className='footer-menu'>
            <li className='footer-menu-title'>
              <h3>Legal</h3>
            </li>
            <li>T&Cs</li>
            <li>Privacy</li>
            <li>Disclaimers</li>
          </ul>
        </div>

        <form action="submit" className='subscribe-container'>
          <h3 className='subscribe-title'>Subscribe</h3>
          <div className="subscribe-wrapper">
            <input type="text" placeholder='이메일을 입력하세요' className='subscribe-input' />
            <button className='primary'>Subscribe</button>
          </div>
          <p className='subscribe-content'>
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</small>
          </p>
        </form>
      </nav>

      <div className="footer-company">
        <span>&copy; 2024 Danyang, Inc</span>
        <ul className='footer-logo'>
          <li><a href="/"><img src={twitterLogo} alt="twitter" /></a></li>
          <li><a href="/"><img src={discordLogo} alt="discord" /></a></li>
          <li><a href="/"><img src={githubLogo} alt="github" /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer