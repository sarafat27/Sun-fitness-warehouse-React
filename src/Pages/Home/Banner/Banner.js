import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Images/Banner/pic1.jpg'
import pic2 from '../../../Images/Banner/pic2.jpg'
import pic3 from '../../../Images/Banner/pic3.jpg'

const Banner = () => {
    return (
        <div>
            <h1 className='text-center my-3'>Gym equipment warehouse</h1>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;