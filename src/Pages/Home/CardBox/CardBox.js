import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardBox = ({ equipment }) => {
    const navigate = useNavigate();
    const { _id, name, price, quantity, img, description, supplierName } = equipment;

    const goToDetail = () => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='col-lg-4 mb-4 col-md-6'>
            <CardGroup>
                <Card className='border border-dark' style={{ height: '600px' }}>
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
                    <Button onClick={goToDetail} variant="dark">Stock update</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CardBox;