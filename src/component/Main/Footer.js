import React from 'react'
import '../MainCard/Footers.css'
const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Disha Foundation </h4>
                <ul>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">OUR SERVICES</a></li>
                    <li><a href="#">PRIVACY POLICY</a></li>
                    <li><a href="#">AFFILIATE PROGRAM</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>GET HELP </h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">CONTACT : 9876543210</a></li>
                    <li><a href="#">EMAIL : mailto:disha@foundation.com</a></li>
                    <li><a href="#">STATUS</a></li>
                    <li><a href="#">DONATION</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>SOCIAL</h4>
                <ul>
                    <li><a href="#">TWITTER</a></li>
                    <li><a href="#">INSTAGRAM</a></li>
                    <li><a href="#">FACEBOOK</a></li>
                    <li><a href="#">LINKEDIN</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <div className='sub'> 
                    <label >SUBSCRIBE</label>
                    <input type="email"/>
                </div>
                    
                </div>
            </div>
          
        </div>
    </div>
</footer>
  )
}

export default Footer
