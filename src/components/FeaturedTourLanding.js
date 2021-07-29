import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import './FeaturedTourLanding.css';

const FeaturedTourLanding = () => {
    return (
        <section class="featured-tours-landing">
        <h2 class="page-heading">Featured Tours</h2>
        <div className="row">
        <article class="img-wrapper--small">
          <a href="pages/tours.html"><StaticImage class="feature-img" src="../images/citytour-osaka.jpg" alt="Osaka Castle surrounded by trees"/></a>
          <h3>Osaka</h3>
        </article>
        <article class="img-wrapper--small">
          <a href="pages/tours.html"><StaticImage class="feature-img" src="../images/citytour-amsterdam.jpg"/></a>
         <h3>Amsterdam</h3>
        </article>
        <article class="img-wrapper--small">
          <a href="pages/tours.html"><StaticImage class="feature-img" src="../images/citytour-montreal.jpg"/></a>
          <h3>Montreal</h3>
        </article>
        </div>
      </section>
    );
};

export default FeaturedTourLanding;