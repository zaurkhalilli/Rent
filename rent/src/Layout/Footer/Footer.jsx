import React from 'react';
import styled from "../Footer/Footer.module.scss";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
            <div className="col-xl-5">
               <div className={styled.leftside}>
               <img src="https://solutions.rent.com/wp-content/themes/rent/assets/images/svg/Logo.svg" alt="" />
                <h4>Solutions that work as hard as you do. Period.</h4>
                <a href=""><BsFacebook size={24}/></a> <a href=""><AiFillTwitterCircle size={30}/></a> <a href=""><AiFillLinkedin size={30}/></a> <a href=""><AiFillInstagram size={30}/></a> 
                <h5>Stay in touch.</h5>
                <input type="email" placeholder='Email Adress *' />  <button>Subscribe</button>
                <br />
                <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
               </div>
            </div>
            <div className="col-xl-7">
                    <div className={styled.footerlist}>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Solutions</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Accessibility</a></li>
                            <li><a href="">Notice of Collection</a></li>
                            <li><a href="">Do Not Sell My Personal Information</a></li>
                            <li><a href="">IRS Form 8937</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                        
                    </div>
                    <p>© 2023 Rent Group Inc. All photos, videos, text, and other content are the property of Rent Group Inc. APARTMENT GUIDE, RENT.COM and RENTALS.COM and the APARTMENT GUIDE, RENT.COM and RENTALS.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.                    If you are using a screen reader, or are having difficulty reading this website, please email accessibilityfeedback@rent.com.</p>
                   <div className={styled.privacy}>
                   <a href="">Privacy Policy</a> <span>l</span> <a href=""> Terms of Service</a> <span>l</span> <a href=""> Patent Notice</a>
                   </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
