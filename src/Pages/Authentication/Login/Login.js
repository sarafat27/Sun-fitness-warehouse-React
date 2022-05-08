import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    const [token] = useToken(user)

    let errorElement;
    if (error || error2) {
        errorElement = <p className='text-danger'>{error?.message} {error2?.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email sent')
        }
        else {
            toast('please give an email address');
        }
    }

    return (
        <div className='row w-100'>
            <div className='col-lg-4 col-md-6 col-9 mx-auto border border-dark mt-3 px-4 py-3 rounded'>
                <h2 className='my-3 text-center'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button variant="dark w-100 rounded-pill" type="submit">
                        Login
                    </Button>
                    <p className='my-3'>New to This website? <Link className='text-decoration-none' to='/register'>please register</Link></p>
                </Form>
                <p>Forget password? <button onClick={resetPassword} className='btn btn-link text-decoration-none text-success'>
                    Reset password
                </button></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;