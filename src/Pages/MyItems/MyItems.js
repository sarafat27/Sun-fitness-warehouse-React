import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/addedItems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/addedItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest);
                })
        }
    }

    return (
        <div>
            <h2 className='text-center mt-2 mb-4'>These are your items: {items.length}</h2>
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
            <div className='mb-5'>
                {
                    items.map(item => <Table key={item._id} striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>{item.name}
                                    <img className='img' src={item.img} alt="" />
                                </td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.shippingCost}</td>
                                <td onClick={() => handleDelete(item._id)} >
                                    <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                </td>
                            </tr>
                        </tbody>
                    </Table>)
                }
            </div>
        </div>
    );
};

export default MyItems;