import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddItem = () => {
    const handleAddItems = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const shippingCost = event.target.shipping.value;
        const img = event.target.image.value;
        const newEquipment = { name, price, img, quantity, shippingCost }

        //send data to the server
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
            })
    }
    return (
        <div style={{ width: '30vw' }} className=' mx-auto border border-dark mt-3 px-4 py-3 rounded'>
            <h2 className='text-center my-3'>Please add items</h2>
            <Form onSubmit={handleAddItems} className='form'>
                <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control type="text" placeholder="equipment name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPrice">
                    <Form.Control type="text" placeholder="Price" name='price' required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicImage">
                    <Form.Control type="text" placeholder="image" name='image' required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicImage">
                    <Form.Control type="text" placeholder="quantity" name='quantity' required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicImage">
                    <Form.Control type="text" placeholder="shipping cost" name='shipping' required />
                </Form.Group>
                <Button variant="dark w-100 rounded-pill" type="submit">
                    Add item
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;