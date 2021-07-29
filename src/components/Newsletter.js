import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div class="newsletter">
        <header>
<h2 class="heading page-heading">Newsletter</h2>
            </header>
<p class="description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>
<form class="newsletter-form">
<label for="sign-up-input">Email</label>
<input type="email" id="sign-up-input" className="newsletter-signup" placeholder="janedoe@mail.com" required/>
<section class="submit-area">
<button class="btn--small primary-btn submit" type="submit">Sign Up</button>
</section>
</form>
</div>
    );
};

export default Newsletter;