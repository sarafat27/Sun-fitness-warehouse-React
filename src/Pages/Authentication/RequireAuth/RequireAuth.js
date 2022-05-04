import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }}
            replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <h1> your email not verified</h1>
            <h3>please verify your email</h3>
            <Button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('verification email sent')
                }}
                variant="dark">Send verification email again</Button>
        </div>
    }
    return children
};

export default RequireAuth;