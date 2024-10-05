import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="footer-logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptas illo enim placeat sed, tenetur expedita incidunt, explicabo obcaecati, recusandae esse soluta dolorum eaque quaerat. Placeat, hic. Aperiam, consequuntur ipsam.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook-link" />
                <img src={assets.twitter_icon} alt="twitter-link" />
                <img src={assets.linkedin_icon} alt="linkedin-link" />
            </div>
        </div>

        <div className="footer-content-center">
            <h1>COMPANY</h1>
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>CONTACT</h2>
            <ul>
                <li>+1 234 567</li>
                <li>example@example.com</li>
            </ul>
        </div>
      </div>

      <p className="footer-copyright">
      Copyright © Elyn Nguyen - All rights reserved
      </p>
    </div>
  )
}

export default Footer
