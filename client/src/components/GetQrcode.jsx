import { QRCodeCanvas } from 'qrcode.react'
import './GetQrcode.css'

function GetQrcode() {

  return (
    <>
      <div className="qrcode-container">
        <button className='secondary'>QR code 띄우기</button>
        <QRCodeCanvas value='https://danyang.on-fleek.app/' size={300} />
      </div>
    </>
  )
}

export default GetQrcode