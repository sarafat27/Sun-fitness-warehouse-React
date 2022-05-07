import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/addedItem?email=${email}`
            try {
                const { data } = await axios.get(url);
                setItems(data);
            }
            catch (error) {
                console.log(error)
            }
        }
        getItems();
    }, [])

    return (
        <div>
            <h2>these are my items: {items.length}</h2>
        </div>
    );
};

export default MyItems;