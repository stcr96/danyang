import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom';
import exampleLogo from './assets/example.svg';
import firstPicture from './assets/app-1.png';
import './App.css'

// 1. Get projectId
const projectId = '9ee04e5a11ffadb507e3e5d0b6ae19af'

// 2. Set chains
const mainnet = {
  chainId: 80001,
  name: 'MATIC_MUMBAI',
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
      <main>
        <section className="a">
          <div className='app-container'>
            <div className='timeline'>
              <img src={exampleLogo} alt="example logo" />
              <hr />
            </div>
            <div className='content-wrapper'>
              <div className="content-info">
                <h1 className='super'>NFT 구매하고,<br /> 단양다민 되자!</h1>
                <h1 className='small'>
                  합리적인 가격에 nft를 구매하고 디지털 단양주민이 <br /> 되면 다양한 혜택이 있습니다
                </h1>
                <Link to='/products'>단양NFT 둘러보기</Link>
              </div>
              <div className="img-info">
                <img src={firstPicture} alt="디지털주민증" />
              </div>
            </div>
          </div>
          <div className='app-container'>
            <div className='timeline'>
              <img src={exampleLogo} alt="example logo" />
              <hr />
            </div>
            <div className='content-wrapper'>
              <div className="content-info">
                <h1 className='super'>주민증 발급하면,<br />혜택이 팡팡</h1>
                <h1 className='small'>
                  합리적인 가격에 nft를 구매하고 디지털 단양주민이 <br /> 되면 다양한 혜택이 있습니다
                </h1>
                <Link to='/products'>어떤 혜택이 있나요?</Link>
              </div>
              <div className="img-info">
                <img src={firstPicture} alt="디지털주민증" />
              </div>
            </div>
          </div>
          <div className='app-container'>
            <div className='timeline'>
              <img src={exampleLogo} alt="example logo" />
            </div>
            <div className='content-wrapper'>
              <div className="content-info">
                <h1 className='super'>DAO에 참여해<br />단양을 내맘대로</h1>
                <h1 className='small'>
                  합리적인 가격에 nft를 구매하고 디지털 단양주민이 <br /> 되면 다양한 혜택이 있습니다
                </h1>
                <Link to='/products'>DAO가 무엇인가요?</Link>
              </div>
              <div className="img-info">
                <img src={firstPicture} alt="디지털주민증" />
              </div>
            </div>
          </div>
        </section>

        <section className='b'>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
