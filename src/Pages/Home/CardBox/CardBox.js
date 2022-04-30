import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const CardBox = ({ equipment }) => {
    console.log(equipment)
    const { name, price, quantity, img, description, supplierName } = equipment;
    return (
        <div className='col-lg-4'>
            <CardGroup>
                <Card style={{ height: '600px' }}>
                    <Card.Img className='mx-auto' style={{ height: '420px', width: '300px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>price: {price}</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                        <Card.Text>Supplier name: {supplierName}</Card.Text>
                    </Card.Body>
                    <Button variant="dark">Stock update</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CardBox;