import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../../Images/social login/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'>

                </div>
                <p className='mt-3 mx-2'>or</p>
                <div style={{ height: '2px' }} className='bg-dark w-50'>
                </div>
            </div>
            {errorElement}
            <Button onClick={() => signInWithGoogle()} className='w-100 d-block rounded-pill' variant="dark">
                <img className='me-2' width={25} src={googleLogo} alt="" />
                Login with Google</Button>
        </div>
    );
};

export default SocialLogin;