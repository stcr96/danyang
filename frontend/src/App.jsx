import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import Header from './components/Header'
import Footer from './components/Footer'
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
      <div className="App">
        
      </div>
      <Footer />
    </>
  )
}

export default App
