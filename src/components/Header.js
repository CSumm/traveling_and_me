import React, {useEffect} from 'react';
import './Header.css';

const Header = () => {

    return (
        <header id="page-header">
   
<div class="logo-wrapper">
<a href="/">
 <img src="images/logotype-dark.png" alt="company logo"/>
</a>
</div>

<label className="ham-menu" for="hidden-checkbox">
<svg  viewBox="0 0 100 80" width="40" height="40">
  <rect className="animated-bar-top" width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect className="animated-bar-bottom" y="60" width="100" height="20"></rect>
</svg>
</label>

<input type="checkbox" id="hidden-checkbox"/>
<div class="search-and-navigation-block">

<div class="search-field-component">
<input type="text" class="search-bar" placeholder="I want to visit..." aria-label="City tour search"/>
<button class="mdc-icon-button material-icons">search</button>
</div>

<nav class="page-nav">
<ul class="nav-links">
<li><a class="nav-link--header-dark current-page">Home</a></li>
<li><a class="nav-link--header-dark" href="/tours.html">Tours</a></li>
<li><a class="nav-link--header-dark" href="/blog.html">Blog</a></li>
<li><a class="nav-link--header-dark" href="/about.html">About</a></li>
<li><a class="nav-link--header-dark" href="/contact.html">Contact</a></li>
</ul>

<div class="user-login-block">
 <a href="/" class="user-login">Login</a>
 </div>
 </nav>

</div>
</header>
    );
};

export default Header;