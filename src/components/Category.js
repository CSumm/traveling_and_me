import React from 'react';
import './Category.css';

const Category = ({children}) => {
    return (
        <article class="category">
        {children}
      </article>
    );
};

export default Category;