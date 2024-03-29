import BuyNFT from '../components/BuyNFT'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Marketplacepage.css';

function Marketplacepage() {

  return (
    <>
      <Header />
      <main id='Marketplace'>
        <div className='marketplace-title-container'>
          <h1 className='marketplace-title'>단양팔경 NFTs</h1>
          <p>단양의 아름다움을 상징하는 단양팔경 NFT를 구매하여 단양의 디지털 주민이 되고 지역 사회를 지원하세요.</p>
        </div>
        <hr />
        <div className='nft-container'>
          <div className="nft-wrapper">
            <h1 className='nft-title'>제1경 도담삼봉</h1>
            <p className='nft_content'>
              이곳은 조선 개국공신 정도전이 자신의 호를 삼봉이라 할 만큼 젊은 시절을 이곳에서 청유하였다 한다. 삼봉은 원래 강원도 정선군의 삼봉산이 홍수 때 떠내려와 지금의 도담삼봉이 되었으며, 그 이후 매년 단양에서는 정선군에 세금을 내고 있었는데 어린 소년 정도전이 우리가 삼봉을 정선에서 떠 내려오라 한 것도 아니요, 오히려 물길을 막아 피해를 보고 있어 아무 소용이 없는 봉우리에 세금을 낼 이유가 없으니 필요하면 도로 가져가라고 한 뒤부터 세금을 내지 않게 되었다는 이야기가 전해지고 있다.
            </p>
            <div className="sale-wrapper">
              <p className="sale-date">
                Date: <br />
                <span className='data'>2024.03.10 </span>
                <span className='unit'>SUN</span>
              </p>
              <p className="sale-chain">
                Network: <br />
                <span className='data'>Ethereum</span>
              </p>
              <div className="flex-sale">
                <span className="sale-price">
                  0.03 <span className="unit">ETH</span>
                </span>
                <BuyNFT />
              </div>
            </div>
          </div>
          <img src="https://ipfs.io/ipfs/QmeExEYoftvbYQvQWhCMdVgua1MARtyQbDUVVP99sUG8dC?filename=%EC%9D%B4%EB%B0%A9%EC%9A%B4_%EB%8F%84%EB%8B%B4%EC%82%BC%EB%B4%89.jpg" alt="도담삼봉nft" className="nft-img" />
        </div>

        <hr />
        <div className='nft-container'>
          <div className="nft-wrapper">
            <h1 className='nft-title'>제3경 구담봉</h1>
            <p className='nft-content'>
              이곳은 장엄한 기암절벽 위의 바위가 마치 거북이 모양과 닮았다는 것에서 구담이라는 지명이 유래되었다고 한다. 본래 구담이었으나 후세 사람들이 옥순봉과 가까이 있어 구담봉이라 부르게 된 것 같다. 조선 인종 때 이지번이 벼슬을 버리고 이곳에 은거하였는데, 푸른 소를 타고 강산을 오가고, 칡넝쿨을 구담의 양쪽 언덕에 매고 왕래하여 사람들이 신선이라 불렀다는 이야기가 전해진다.
            </p>
            <div className="sale-wrapper">
              <p className="sale-date">
                Date: <br />
                <span className='data'>2024.03.17 </span>
                <span className='unit'>SUN</span>
              </p>
              <p className="sale-chain">
                Network: <br />
                <span className='data'>Ethereum</span>
              </p>
              <div className="flex-sale">
                <span className="sale-price">
                  0.03 <span className="unit">ETH</span>
                </span>
                <BuyNFT />
              </div>
            </div>
          </div>
          <img src="https://ipfs.io/ipfs/QmVbs2x4kemWiHc4k29jjbrMp7JgFszpM951givZ139JSh?filename=%EA%B5%AC%EB%8B%B4%EB%8F%84_%EC%9D%B4%EB%B0%A9%EC%9A%B4.jpg" alt="구담봉nft" className="nft-img" />
        </div>

        <hr />
        <div className='nft-container'>
          <div className="nft-wrapper">
            <h1 className='nft-title'>제4경 사인암</h1>
            <p className='nft-content'>
              이곳은 푸른 계곡을 끼고 있는 70m 높이의 기암절벽이다. 고려 말의 학자 우탁(1263~1343년) 선생이 정4품 ‘사인재관’ 벼슬에 있을 때 휴양하던 곳이라 해서 사인암이라 불리게 되었다. 기암절벽 위에 서 있는 노송이 멋스러우며 우탁 선생이 직접 새긴 ‘뛰어난 것은 무리에 비유할 것이 없으며 확실하게 빼지 못한다. 혼자서도 두려운 것이 없으며 세상에 은둔해도 근심함이 없다’는 뜻의 글씨가 암벽에 남아 있다.
            </p>
            <div className="sale-wrapper">
              <p className="sale-date">
                Date: <br />
                <span className='data'>2024.03.24 </span>
                <span className='unit'>SUN</span>
              </p>
              <p className="sale-chain">
                Network: <br />
                <span className='data'>Ethereum</span>
              </p>
              <div className="flex-sale">
                <span className="sale-price">
                  0.03 <span className="unit">ETH</span>
                </span>
                <BuyNFT />
              </div>
            </div>
          </div>
          <img src="https://ipfs.io/ipfs/QmSJ3rrxnExFMw1G4fh4iXihtT5GFPPpLfcTsotKvPkUNz?filename=%EC%82%AC%EC%9D%B8%EC%95%94%EB%8F%84-%EA%B9%80%ED%99%8D%EB%8F%84.jpg" alt="사인암nft" className="nft-img" />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Marketplacepage;