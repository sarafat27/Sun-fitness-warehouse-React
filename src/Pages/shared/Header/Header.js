import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#items">Items</Nav.Link>
                            <Nav.Link href="home#recommended">Recommended</Nav.Link>
                            <Nav.Link href="home#award">Award</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to='/manageInventory' >Manage items</Nav.Link>
                                        <Nav.Link as={Link} to='/myItems' >My items</Nav.Link>
                                        <Nav.Link as={Link} to='/addItem' >Add item</Nav.Link>
                                        <Nav.Link onClick={handleSignOut} as={Link} to='/login' >Logout</Nav.Link>
                                    </> :
                                    <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;