import Header from '../components/Header'
import Footer from '../components/Footer'
import danyangDistrict from '../assets/danyang-district.jpg'
import danyangMission from '../assets/mission.png'
import './Aboutpage.css'

function AboutPage() {
  return (
    <>
      <Header />
      <main id='About'>
        <section className="about-danyang">
          <h1 className='about-title'><strong>Danyang is ...</strong></h1>
          <img src={danyangDistrict} alt="danyang-district" className='district-img' />
          <p></p>
        </section>

        <section className="mission">
          <div className="mission-wrapper">
            <h1 className='about-title'><strong>Our Mission</strong></h1>
            <div className="mission-content">
              <h3>Connecting the attractiveness and possibility of locals to the future through blockchain technology.</h3>
              <p>미래를 위해 우리가 지켜야 할 문화, 생활 방식, 천연자원은 기존 사회 시스템에서는 지속 불가능해지고 있습니다.</p>
              <p>크립토 빌리지는 블록체인 기술과 로컬을 결합하여 모두가 지속 가능하고 다양한 가치를 추구하는 미래를 만들고, 글로벌 규모의 공존을 장려하는 것을 목표로 합니다. 
              동시에, 사라질 위기에 처한 지역의 다양한 문화와 자원을 살리는 데 집중하고 있습니다.</p>
              <p>우리는 해외에서 일본의 지역과 문화를 접할 수 있는 관문이며 그들이 직면한 어려움에서 살아남을 수 있도록 돕습니다. 또한, 해외 각 지역의 로컬 DAO를 연결하고 글로벌하게 네트워킹하여 새로운 생태계를 만들어갑니다.</p>
            </div>
          </div>
          <img src={danyangMission} alt="danyang-mission" className='mission-img' />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage;