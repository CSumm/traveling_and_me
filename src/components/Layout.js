import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ pageTitle, children }) => {
    return (
      <main>
        <title>{pageTitle}</title>
        <Header/>
        {children}
        <Footer/>
      </main>
    )
  }
  export default Layout