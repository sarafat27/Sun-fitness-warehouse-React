import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [quantityData, setQuantityData] = useState("")
    const { name, price, quantity, img, description, supplierName, shippingCost } = detail;
    const [info, setInfo] = useState(quantity);

    useEffect(() => {
        if (Object.keys(detail).length !== 0) {
            setInfo(detail.quantity)
        }
    }, [detail])
    useEffect(() => {
        const getDetail = async () => {
            try {
                const url = `http://localhost:5000/equipment/${id}`
                const res = await axios.get(url)
                setDetail(res?.data)
                setQuantityData(res?.data?.quantity)
            } catch (err) {
                console.log(err)
            }
        }
        getDetail()
    }, [id]);

    const handleDelivered = () => {
        if (quantityData === 0) {
            return
        }
        const newQuantity = quantityData - 1;
        const updatedQuantity = { quantity: newQuantity };

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
                setInfo(updatedQuantity.quantity)
                setQuantityData(newQuantity)
            })
    };

    const handleRestock = event => {
        event.preventDefault();
        const newStocked = event.target.number.value;
        let newQuantity = parseInt(quantityData) + parseInt(newStocked);
        const updatedQuantity = { quantity: newQuantity };

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
                setInfo(updatedQuantity.quantity)
                setQuantityData(newQuantity)
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
                            <Card.Text>Quantity: {info}</Card.Text>
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