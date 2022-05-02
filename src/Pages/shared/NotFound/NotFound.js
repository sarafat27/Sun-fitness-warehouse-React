import React from 'react';
import image from '../../../Images/Not found/error.webp'

const NotFound = () => {
    return (
        <div className='text-center mt-4'>
            <img className='img-fluid' src={image} alt="" />
        </div>
    );
};

export default NotFound;