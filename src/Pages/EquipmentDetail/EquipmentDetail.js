import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
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
        <div className='row '>
            <div className='col-lg-4 mt-5'>
                <CardGroup>
                    <Card style={{ height: '600px' }}>
                        <Card.Img className='mx-auto' style={{ height: '420px', width: '300px' }} variant="top" src={img} />
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
                        <Button onClick={handleDelivered} variant="dark">Delivered</Button>
                    </Card>
                </CardGroup>
            </div>
            <form onSubmit={handleRestock} className='col-lg-4'>
                <h4>Restock the items</h4>
                <input className='w-75' name='number' type="number" />
                <br />
                <input className='w-75 mt-3' type="submit" value="Restock" />
            </form>
            <Button as={Link} to='/manageInventory' variant='dark w-50 d-block mx-auto my-5'>Manage inventory</Button>
        </div>
    );
};

export default EquipmentDetail;