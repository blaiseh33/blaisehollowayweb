import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    document.getElementsByClassName('flat-button').disabled = true;
    setTimeout(function(){document.getElementById("flat-button").disabled = false;},2000);

    e.preventDefault()

    emailjs.sendForm(
      'service_eqdpmzh',
      'template_o4nzj9f',
      refForm.current,
      'Q0ANUM5yVs16a81Sd' )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Message failed to send - definitely not the developers fault - please try again')
      }
    )
  }
  
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
              idx={15}
            />
          </h1>
          <p className='text-prompt'>
            I am open to any employment opportunities at the moment - if you believe I may be a good fit in your team 
            please feel free to reach out using the form below!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='Subject' type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" onclick="clearFields()"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Blaise Holloway,
          <br />
          Canmore, AB,
          <br />
          Canada
          <br />
          <span>blaiseh33@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[51.0884, -115.3479]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.0884, -115.3479]}>
              <Popup>Not exact location, I don't want to be stalked...</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='triangle-skew-spin' />
    </>
  )
}

export default Contact