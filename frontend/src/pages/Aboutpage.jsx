import Header from '../components/Header'
import Footer from '../components/Footer'
import './Aboutpage.css'

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className='about-container'>
          <h1 className='text-center mt-4 mb-4'>단양은</h1>
          <p>단양은 한국인구소멸지도에서 소멸위기 최고 등급으로 블라블라</p>
          <h1 className='mt-5 mb-4'>History</h1>
          <img src="https://ipfs.io/ipfs/QmR7SdH5VfUhcS1vo8ZLPzxFiKTWPCdGC2ixDfMWUL82Gn?filename=%EB%8B%A8%EC%96%91%EB%8B%A4%EC%98%A4%20%EC%86%8C%EA%B0%9C%20%EB%8F%84%EC%8B%9D%ED%99%94.png" alt="단양다오 소개 도식화" />
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage;