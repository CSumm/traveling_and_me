import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Category from './Category';
import './TourCategoryLanding.css';

const TourCategoryLanding = () => {
    return (
        <section class="tour-location-category-block">
      <h2 class="page-heading">By Category</h2>

      <div className="categories">
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-east-asia.jpg"/></a>
        </div>
        <h3>East Asia</h3>
      </Category>
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-south-asia.jpg"/></a>
        </div>
        <h3>South Asia</h3>
      </Category>
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-europe.jpg"/></a>
        </div>
        <h3>Europe</h3>
      </Category>
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-middle-east.jpg"/></a> 
        </div>
        <h3>Middle East</h3>
      </Category>
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-south-america.jpg"/></a>
      </div>
      <h3>South America</h3>
      </Category>
      <Category>
        <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-africa.jpg"/></a>
        </div>
        <h3>Africa</h3>
      </Category>
      <Category>
      <div className="img-wrapper">
        <a href="pages/tours.html"><StaticImage class="category-img" src="../images/category-northamerica.jpg"/></a>
        </div>
        <h3>North America</h3>
      </Category>
      </div>
    </section>
    );
};

export default TourCategoryLanding;