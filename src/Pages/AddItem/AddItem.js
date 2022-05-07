import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItems = event => {
        event.preventDefault();
        const newEquipment = {
            email: user.email,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            shippingCost: event.target.shipping.value,
            img: event.target.image.value,
        }

        //send data to equipment collection
        fetch('http://localhost:5000/equipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                toast('Equipment succesfully added');
                event.target.reset();
            });

        //send data to added items collection
        axios.post('http://localhost:5000/addedItems', newEquipment)
            .then(response => {
                const { data } = response;
            })
    }

    return (
        <div className='row w-100'>
            <div className='col-lg-4 col-md-5 col-8 mx-auto border border-dark mt-3 px-4 py-3 rounded'>
                <h2 className='text-center my-3'>Please add items</h2>
                <Form onSubmit={handleAddItems} className='form'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" value={user?.email} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Control type="text" placeholder="equipment name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPrice">
                        <Form.Control type="text" placeholder="Price" name='price' required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicImage">
                        <Form.Control type="text" placeholder="image" name='image' required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicQuantity">
                        <Form.Control type="text" placeholder="quantity" name='quantity' required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicShipping">
                        <Form.Control type="text" placeholder="shipping cost" name='shipping' required />
                    </Form.Group>
                    <Button variant="dark w-100 rounded-pill" type="submit">
                        Add item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;