import { faLocation, faMailBulk, faMailForward, faMailReply, faMailReplyAll, faMapLocation, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import apple from '../../../Images/Footer/apple.png'
import google from '../../../Images/Footer/google.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-12 my-auto'>
                    <p><FontAwesomeIcon className='me-2' icon={faLocation}>
                    </FontAwesomeIcon> sector-3, 34, AK Centre, Uttara, Dhaka
                    </p>
                    <p><FontAwesomeIcon className='me-2' icon={faMailForward}>
                    </FontAwesomeIcon>
                        Official: sun-fitness-warehouse@gmail.com
                    </p>
                    <p><FontAwesomeIcon className='me-2' icon={faPhone}>
                    </FontAwesomeIcon>
                        Helpline : 031734523 , 01829972416 , 01632435242
                    </p>
                    <p><small>(Available : Sat - Thu, 10:00 AM to 10:00 PM)</small></p>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <p>About us</p>
                    <p>Give feedback</p>
                    <p>Terms and conditions</p>
                    <p>Privacy policy</p>
                    <p>App privacy policy</p>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>

                </div>
                <div className='col-lg-3 col-md-3 col-12  my-auto'>
                    <img className='d-block mx-auto' width={140} height={35} src={apple} alt="" />
                    <img className='d-block mx-auto' width={160} height={50} src={google} alt="" />
                </div>
            </div>
            <p className='text-center mt-5'><small>Copyright reserved by Sun fitness warehouse @ {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;