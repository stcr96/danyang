import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import Header from './components/Header';
import Footer from './components/Footer'
import { Link } from 'react-router-dom';
import danyangLandscape from './assets/danyang-landscape.jpg'
import example from './assets/app-1.png'
import diplomaLogo from './assets/diploma.svg'
import communityLogo from './assets/community.svg'
import voteLogo from './assets/vote.svg'
import './App.css'

// 1. Get projectId
const projectId = '9ee04e5a11ffadb507e3e5d0b6ae19af'

// 2. Set chains
const mainnet = {
  chainId: 80001,
  name: 'Mumbai',
  currency: 'MATIC',
  explorerUrl: 'https://mumbai.polygonscan.com/',
  rpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/Q4TLtST-SqQc-Il8qolLi5XQ90figtVd'
}

// 3. Create a metadata object
const metadata = {
  name: 'Danyang DAO',
  description: 'Danyang DAO description',
  url: '', // origin must match your domain & subdomain
  icons: []
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

function App() {

  return (
    <>
      <Header />
      <main id='Home'>
        <section className="a">
          <div className="a-title">
            <strong>Danyang</strong>
          </div>
          <div className="a-content">
            <button className="primary"><Link to='/about'>단양다오 알아보기</Link></button>
            <button className="secondary"><Link to='/marketplace'>NFT 구매하기</Link></button>
          </div>
          <img src={danyangLandscape} alt="danyang-landscape" className='b-image' />
        </section>

        <div className="container">
          <section className='b'>
            <div className="b-title">
              <strong>Digital Renaissance: <br />Danyang</strong>
            </div>
            <div className="b-content">
              <p>Dive into a unique universe, a place where digital pixels coexist with the tranquillity of Danyang, an endangered area. Here, you don’t just purchase an NFT, you purchase a lifeline for a region on the brink.</p>
              <p>Buy an NFT. Become a digital resident. There’s no easier way to join in the revolution to renew our world. Be a part of creating a haven for art and culture, in the midst of mountains and rivers.</p>
            </div>
          </section>

          <section className="c">
            <div className="card">
              <img src={diplomaLogo} alt="diploma-logo" />
              <h2 className="card-title">Unlock Exclusive Benefits with NFT Ownership</h2>
              <p>As an NFT holder and DAO member, you gain access to a range of exciting benefits. Enjoy governance rights, participate in community events, and contribute to conservation efforts in Danyang.</p>
              <div className="flex-card">
                <button className="secondary">Learn More</button>
                <Link to='/'><small>Sign Up</small></Link>
              </div>
            </div>
            <div className="card">
              <img src={communityLogo} alt="community-logo" />
              <h2 className="card-title">Join a Thriving Digital Community</h2>
              <p>As an NFT holder and DAO member, you gain access to a range of exciting benefits. Enjoy governance rights, participate in community events, and contribute to conservation efforts in Danyang.</p>
              <div className="flex-card">
                <button className="secondary">Learn More</button>
                <Link to='/'><small>Sign Up</small></Link>
              </div>
            </div>
            <div className="card">
              <img src={voteLogo} alt="vote-logo" />
              <h2 className="card-title">Join a Thriving Digital Community</h2>
              <p>As an NFT holder and DAO member, you gain access to a range of exciting benefits. Enjoy governance rights, participate in community events, and contribute to conservation efforts in Danyang.</p>
              <div className="flex-card">
                <button className="secondary">
                  <Link to='https://www.tally.xyz/gov/danyang'>Learn More</Link>
                </button>
                <Link to='/'><small>Sign Up</small></Link>
              </div>
            </div>
          </section>

          <section className="d">
            <div className='one'>
              <strong className='strong-number'>1000+</strong>
              <p>Digital Regidents</p>
            </div>
            <div className='two'><img src={example} alt="example" /></div>
            <div className='three'>three</div>
            <div className='four'>
              <strong className='strong-number'>500+</strong>
            </div>
          </section>

          <section className="e">
            <div className="e-title">
              <strong>Ready, Set</strong>
            </div>
            <div className="e-content">
              <p>Ready to leap into the future while preserving the past? You’re just a click away. Time to set Danyang’s destiny.</p>
            </div>
            <button className="primary">Purchase NFT</button>
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
