import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEquipment from '../../hooks/useEquipment';
import './ManageInventory.css';

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
                        <th>Name and picture</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Shipping cost</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </Table>
            <div>
                {
                    equipments.map(equipment => <Table key={equipment._id} striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>{equipment.name}
                                    <img className='img' src={equipment.img} alt="" />
                                </td>
                                <td>{equipment.price}</td>
                                <td>{equipment.quantity}</td>
                                <td>{equipment.shippingCost}</td>
                                <td onClick={() => handleDelete(equipment._id)} >
                                    <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                </td>
                            </tr>
                        </tbody>
                    </Table>)
                }
            </div>
            <Button as={Link} to='/addItem' variant="success w-25 d-block mx-auto my-4">Add new item</Button>
        </div>
    );
};

export default ManageInventory;