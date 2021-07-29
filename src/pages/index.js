import * as React from "react"
import Layout from '../components/Layout';
import HeroBanner from "../components/HeroBanner";
import FeaturedTourLanding from "../components/FeaturedTourLanding";
import TourCategoryLanding from "../components/TourCategoryLanding";
import Newsletter from "../components/Newsletter";
import BackToTop from "../components/BackToTop";
import AnimatedPlane from "../components/AnimatedPlane";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroBanner/>
      <div>
      <AnimatedPlane/>
      <FeaturedTourLanding/>
      </div>
      <TourCategoryLanding/>
      <Newsletter/>
      <BackToTop currentPage="/"/>
    </Layout>
  )
}

export default IndexPage
