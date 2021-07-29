import React from 'react';
import './BackToTop.css';
import {Link} from 'gatsby'

const BackToTop = ({currentPage}) => {

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    }

    return (
        <div className="back-to-top">
            <Link to={currentPage} onClick={scrollToTop}>Back to top</Link>
        </div>
    );
};

export default BackToTop;