import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const { name, price, quantity, img, description, supplierName, shippingCost } = detail;

    useEffect(() => {
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetail(data);
            })
    }, []);

    const handleDelivered = () => {
        const newQuantity = quantity - 1;
        const updatedQuantity = { quantity: newQuantity };
        const newDetail = { ...detail, ...updatedQuantity }
        setDetail(newDetail);

        //send data to server to update
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    const handleRestock = event => {
        event.preventDefault();
        const newStocked = event.target.number.value;
        const newQuantity = parseInt(quantity) + parseInt(newStocked);
        const updatedQuantity = { quantity: newQuantity };
        const newDetail = { ...detail, ...updatedQuantity }
        setDetail(newDetail);


        //send data to server to update
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
        event.target.reset();
    }

    return (
        <div>
            <div className='row w-100'>
                <div className='col-lg-4 col-md-6 col-sm-10 mt-5 mx-auto'>
                    <CardGroup>
                        <Card className='shadow-lg mx-3' style={{ height: '600px', borderRadius: '10px' }}>
                            <Card.Img className='mx-auto shadow-lg' style={{ height: '420px', width: '300px', borderRadius: '10px' }} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>price: {price}</Card.Text>
                                <Card.Text>ShippingCost: {shippingCost}</Card.Text>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text>Quantity: {quantity}</Card.Text>
                                <Card.Text>Supplier name: {supplierName}</Card.Text>
                            </Card.Body>
                            <Button onClick={handleDelivered} variant="success">Delivered</Button>
                        </Card>
                    </CardGroup>
                </div>
                <div style={{ height: '250px' }} className='col-lg-4 col-md-6 col-sm-10 w-25 mx-auto border border-dark my-auto px-4 rounded'>
                    <Form onSubmit={handleRestock} className='my-5'>
                        <h4 className='text-center'>Restock the items</h4>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="text" name='number' required />
                        </Form.Group>
                        <Button variant="dark w-100 rounded-pill" type="submit">
                            Restock
                        </Button>
                    </Form>
                </div>
            </div>
            <Button as={Link} to='/manageInventory' variant='success w-50 d-block mx-auto my-5'>Manage inventory</Button>
        </div>
    );
};

export default EquipmentDetail;