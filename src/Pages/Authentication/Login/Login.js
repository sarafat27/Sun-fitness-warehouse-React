import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home')
    }

    return (
        <div style={{ width: '30vw' }} className=' mx-auto border border-dark mt-3 px-4 py-3 rounded'>
            <h2 className='my-3 text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-100 rounded-pill" type="submit">
                    Login
                </Button>
                <p className='my-3'>New to This website? <Link className='text-decoration-none' to='/register'>please register</Link></p>
            </Form>
            <p>Forget password? <button className='btn btn-link text-decoration-none text-success'>
                Reset password
            </button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;