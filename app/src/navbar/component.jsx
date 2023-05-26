import './style.css'
import logo from '../assets/logo.svg'
import facebookIcon from '../assets/facebook.svg'
import instaIcon from '../assets/instagram.svg'
import youtubeIcon from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'

function component() {
  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <img src={logo} alt="logo" className='navbar__imagem' />
      </div>
      <div className="navbar__links">
        <a href=""><img src={facebookIcon} alt="" /></a>
        <a href=""><img src={instaIcon} alt="" /></a>
        <a href=""><img src={youtubeIcon} alt="" /></a>
        <a href=""><img src={twitter} alt="" /></a>
      </div>
    </div>
  )
}

export default component
