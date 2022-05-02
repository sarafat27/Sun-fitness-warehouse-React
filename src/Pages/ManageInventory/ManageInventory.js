import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEquipment from '../../hooks/useEquipment';

const ManageInventory = () => {
    const [equipments, setEquipments] = useEquipment();
    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/equipment/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const rest = equipments.filter(equipment => equipment._id !== id);
                    setEquipments(rest);
                })
        }
    }
    return (
        <div>
            <h2 className='text-center my-4'>These are all the equipments stored</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '20%' }}>Price</th>
                        <th style={{ width: '20%' }}>Quantity</th>
                        <th style={{ width: '20%' }}>Shipping cost</th>
                        <th style={{ width: '20%' }}>Delete</th>
                    </tr>
                </thead>
            </Table>
            <div>
                {
                    equipments.map(equipment => <Table key={equipment._id} striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td style={{ width: '20%' }}>{equipment.name}</td>
                                <td style={{ width: '20%' }}>{equipment.price}</td>
                                <td style={{ width: '20%' }}>{equipment.quantity}</td>
                                <td style={{ width: '20%' }}>{equipment.shippingCost}</td>
                                <td onClick={() => handleDelete(equipment._id)} style={{ width: '20%' }}>
                                    <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                </td>
                            </tr>
                        </tbody>
                    </Table>)
                }
            </div>
            <Button as={Link} to='/addItem' variant="success w-25 d-block mx-auto">Add new item</Button>
        </div>
    );
};

export default ManageInventory;