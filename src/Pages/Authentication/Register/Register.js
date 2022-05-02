import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            alert('please give same password & confirm password')
        }
        else {
            createUserWithEmailAndPassword(email, password);
            navigate('/home')
        }
    }


    return (
        <div style={{ width: '35vw' }} className='mx-auto border border-dark mt-3 px-5 py-3 rounded'>
            <h2 className='my-3 text-center'>Please Sign up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="dark w-100 rounded-pill" type="submit">
                    SignUp
                </Button>
                <p className='my-3'>Alraedy have an account? <Link className='text-decoration-none' to='/login'>please login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;