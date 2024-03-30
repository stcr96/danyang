import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetJoinCode from '../components/GetJoinCode'
import './Profilepage.css'

function Profilepage() {
  const [profileBackground, setProfileBackground] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleBackgroundUpload = (event) => {
    const selectedBackground = event.target.files[0];
    if (selectedBackground) {
      if (selectedBackground.type.startsWith('image/') && selectedBackground.size < 10485760) { // Check if it's an image and size is less than 10MB
        const backgroundUrl = URL.createObjectURL(selectedBackground);
        setProfileBackground(backgroundUrl);
      } else {
        alert('올바른 형식의 이미지를 선택해주세요. (10MB 이하)');
      }
    }
  };
  
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setProfileImage(imageUrl);
  };

  return (
    <>
      <Header />
      <main id='Profile'>
        {/* 프로필 배경사진 */}
        <section className="profile">
          <label htmlFor="backgroundUpload" className="profile-background-container">
            <img src={profileBackground} className='profile-background' />
            <input type="file" id="backgroundUpload" accept='image/*' onChange={handleBackgroundUpload} style={{display: 'none'}} />
          </label>
          {/* 프로필 사진 */}
          <div className="profile-picture-relative">
            <label htmlFor="imageUpload" className="profile-picture-container">
              <img src={profileImage} className='profile-picture' />
              <input type="file" id="imageUpload" accept='image/*' onChange={handleImageUpload} style={{display: 'none'}} />
            </label>
          </div>
        </section>

        <section className="profile-resident">
          <div className="profile-resident-card">
            <h1>디지털 주민등록증</h1>
            <div></div>
          </div>
          <div className="profile-resident-info">
            <form action='submit'>
              <p>이름</p>
            </form>
            <GetJoinCode />
          </div>
          {/* 다른 프로필 정보도 필요에 따라 추가 */}
        </section>
        
      </main>
      <Footer />
    </>
  )
}

export default Profilepage;