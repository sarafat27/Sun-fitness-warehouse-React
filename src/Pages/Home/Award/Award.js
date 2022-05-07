import React from 'react';
import award from '../../../Images/award/award.jpg'
import gold from '../../../Images/award/gold.jpg'
import silver from '../../../Images/award/silver.jpg'
import bronze from '../../../Images/award/bronze.png'
import './Award.css'
const Award = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Best contributor award</h2>
            <div className='award-container'>
                <div className='award-detail'>
                    <div className='d-flex align-items-center single-award'>
                        <img src={gold} alt="" />
                        <div>
                            <h5>Gold winner</h5>
                            <p>If anyone can store most products among the warehouse owwers,he will receive first prize,and will given a bonus amount.</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center single-award'>
                        <img src={silver} alt="" />
                        <div>
                            <h5>silver winner</h5>
                            <p>If anyone become second in storing products among the warehouse ownwers,he will receive second prize.</p>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center single-award'>
                        <img src={bronze} alt="" />
                        <div>
                            <h5>bronze winner</h5>
                            <p>If anyone become third in storing products among the warehouse ownwers,he will receive third prize.</p>
                        </div>
                    </div>
                </div>
                <img className='award-img' src={award} alt="" />
            </div>
        </div>
    );
};

export default Award;