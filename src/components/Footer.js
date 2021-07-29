import React from 'react';
import {Link} from 'gatsby';
import './Footer.css';
import FacebookLogo from '../images/brand-logo-facebook.svg';
import TwitterLogo from '../images/brand-logo-twitter.svg';
import YouTubeLogo from '../images/brand-logo-youtube.svg';

const Footer = () => {
    return (
        <footer id="footer">
		<section class="footer-top">
  <section class="footer-links">
    <h3 class="sitemap__heading heading--bright">Sitemap</h3>
	  <ul class="sitemap">
    <li><Link class="footer-link" to="/">Home</Link></li>
    <li><Link class="footer-link" to="/tours.html">Tours</Link></li>
    <li><Link class="footer-link" to="/blog.html">Blog</Link></li>
    <li><Link class="footer-link" to="/about.html">About</Link></li>
    <li><Link class="footer-link" href="/contact.html">Contact</Link></li>
  </ul>
		</section>
  <address>
    10996 County Rd #331<br/>
Silt, Colorado(CO), 81652<br/>
    (970) 876-1930
  </address>
  <section class="social-media-block">
    <h4 class="heading--bright">Follow Us</h4>
	  <section class="social-media-links">
          <div>
	  <a href=""><img class="social-media-link"  src={FacebookLogo} alt="Facebook logo link"/></a>
      </div>
      <div>
     <a href=""><img class="social-media-link" src={TwitterLogo} alt="Twitter logo link"/></a>
     </div>
     
	  <a href=""><img class="social-media-link" src={YouTubeLogo} alt="YouTube logo link"/></a>
	  </section>
	  </section>
  </section> 
    <p class="footer-paragraph">
      Returning user? <Link to="">Login</Link>
      <br/>
      <br/>
     Traveling and Me &#174;2021, all rights reserved.
    </p>
</footer>
    );
};

export default Footer;