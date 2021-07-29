import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, {Suspense, useEffect} from "react";
import './HeroBanner.css';
import ThreeLoader from './ThreeLoader';
import gsap from 'gsap';


const HeroBanner = () => {
useEffect(()=>{
    gsap.from('.banner-heading',{opacity:0, translateX:-200, duration: 2})
    gsap.from('.three-canvas', {opacity:0,translateY: 500, duration: 1})
})


    return (
        <div className="hero-banner">
        <section className="banner-heading">
            <h1>Go on a trip without leaving your house</h1>
            </section>
            <div className="three-canvas">
            <Canvas orthographic camera={{ zoom: 5, position: [0, 0, 100] }}> 
        <Suspense fallback={null}>
          <ThreeLoader/>
          <OrbitControls />
        </Suspense>
      </Canvas>
      </div>
      
</div>
    );
};

export default HeroBanner;