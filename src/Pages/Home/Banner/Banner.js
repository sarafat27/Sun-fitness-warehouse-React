import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Images/Banner/pic1.jpg'
import pic2 from '../../../Images/Banner/pic2.jpg'
import pic3 from '../../../Images/Banner/pic3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Sun fitness warehouse</h1>
                        <p>All types of gym equipments are stored here.You can add and delete items from here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Sun fitness warehouse</h1>
                        <p>All types of gym equipments are stored here.You can add and delete items from here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '80vh' }}
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Sun fitness warehouse</h1>
                        <p>All types of gym equipments are stored here.You can add and delete items from here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;