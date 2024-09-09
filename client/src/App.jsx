import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import Header from './components/Header'
import Footer from './components/Footer'
import GetQrcode from './components/GetQrcode'
import { Link } from 'react-router-dom'
import danyangLandscape from './assets/danyang-landscape.jpg'
import learnmoreLogo from './assets/learnmore.svg'
import credential from './assets/credential.png'
import three from './assets/three.jpg'
import diplomaLogo from './assets/diploma.svg'
import communityLogo from './assets/community.svg'
import voteLogo from './assets/vote.svg'
import './App.css'

// 1. Get projectId
const projectId = '9ee04e5a11ffadb507e3e5d0b6ae19af'

// 2. Set chains
const mainnet = {
  chainId: 1001,
  name: 'Kaia_Kairos',
  currency: 'KAIA',
  explorerUrl: 'https://kairos.kaiascan.io/', 
  rpcUrl: 'https://public-en.kairos.node.kaia.io'
}

// 3. Create a metadata object
const metadata = {
  name: 'Danyang DAO',
  description: 'Danyang DAO description',
  url: 'https://danyang.on-fleek.app/', // origin must match your domain & subdomain
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
              <p>소멸위기 지역 단양의 고요함과 디지털 픽셀이 공존하는 독특한 우주로 빠져보세요. 여기서는 NFT를 구매하는 것이 아니라 위기에 처한 지역의 생명선을 구매합니다.</p>
              <p>NFT를 구매하세요. 디지털 거주자가 되세요. 세상을 새롭게 하기 위한 혁명에 동참하는 것보다 더 쉬운 방법은 없습니다. 산과 강이 어우러진 예술과 문화의 안식처를 만드는 일에 동참해 보세요.</p>
            </div>
          </section>

          <section className="c">
            <div className="card">
              <img src={diplomaLogo} alt="diploma-logo" />
              <h2 className="card-title">Unlock Exclusive Benefits with NFT Ownership</h2>
              <p>NFT 보유자이자 DAO 회원으로서 귀하는 다양하고 흥미로운 혜택을 누릴 수 있습니다. 거버넌스 권리를 누리고, 커뮤니티 행사에 참여하고, 단양의 보전 노력에 기여하세요.</p>
              <div className="card-flex">
                <button className="primary"><Link to='/marketplace'>구매하기</Link></button>
                <Link to='/about'>
                  <div className="learn-more">
                    <small>자세히 알아보기</small>
                    <img src={learnmoreLogo} alt="learn-more" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={communityLogo} alt="community-logo" />
              <h2 className="card-title">Join a Thriving Digital Community</h2>
              <p>NFT 보유자이자 DAO 회원으로서 귀하는 다양하고 흥미로운 혜택을 누릴 수 있습니다. 거버넌스 권리를 누리고, 커뮤니티 행사에 참여하고, 단양의 보전 노력에 기여하세요.</p>
              <div className="card-flex">
                <button className="secondary"><Link to='https://open.kakao.com/o/gSjl1meg'>토론하기</Link></button>
                <Link to='/about'>
                  <div className="learn-more">
                    <small>자세히 알아보기</small>
                    <img src={learnmoreLogo} alt="learn-more" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={voteLogo} alt="vote-logo" />
              <h2 className="card-title">Join a Thriving Digital Community</h2>
              <p>NFT 보유자이자 DAO 회원으로서 귀하는 다양하고 흥미로운 혜택을 누릴 수 있습니다. 거버넌스 권리를 누리고, 커뮤니티 행사에 참여하고, 단양의 보전 노력에 기여하세요.</p>
              <div className="card-flex">
                <button className="primary">
                  <Link to='https://www.tally.xyz/gov/danyang-governor'>투표하기</Link>
                </button>
                <Link to='/about'>
                  <div className="learn-more">
                    <small>자세히 알아보기</small>
                    <img src={learnmoreLogo} alt="learn-more" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="d">
            <div className='one'>
              <strong className='strong-number'>1000+</strong>
              <p>지금까지 1000명이 넘게 단양 디지털 주민이 되었습니다</p>
            </div>
            <div className='two'><img src={credential} alt="credential" className='two-img' /></div>
            <div className='three'>
              <div className="three-wrapper">
                <img src={three} alt="" className='three-img' />
              </div>
            </div>
            <div className='four'>
              <strong className='strong-number'>500+</strong>
              <p>매년 500명이 넘는 디지털 주민이 혜택을 받아가고 있습니다</p>
            </div>
          </section>

          <section className="e">
            <div className="e-title">
              <strong>Ready, Set</strong>
            </div>
            <div className="e-content">
              <p>Ready to leap into the future while preserving the past? You’re just a click away. Time to set Danyang’s destiny.</p>
            </div>
            <GetQrcode />
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
