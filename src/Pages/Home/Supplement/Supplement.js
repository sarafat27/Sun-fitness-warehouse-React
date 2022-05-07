import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import supplement from '../../../Images/supplement/supplement.jpg'
import './supplement.css'

const Supplement = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Recommended product</h2>
            <div className='d-flex justify-content-center align-items-center protien-container'>
                <img className='protien-img' src={supplement} alt="" />
                <div className='bg-secondary p-5 ms-5 protien-text'>
                    <h3 className='bg-white p-3'>Why you should add supplement to our stock?</h3>
                    <p className='bg-white p-3'>
                        (1)Supplement is very important for the nutrition of our body.
                        <br />
                        (2)It is very demandable product in every warehouse and it's order quantity is also high.
                    </p>
                    <Button as={Link} to='/addItem' variant="dark w-100">Stock supplement</Button>
                </div>
            </div>
        </div>
    );
};

export default Supplement;