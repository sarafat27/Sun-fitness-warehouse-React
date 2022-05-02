import React from 'react';
import './AddItem.css'
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
                alert('Equipment succesfully added');
                event.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-center mb-4'>Please add items</h2>
            <form onSubmit={handleAddItems} className='form'>
                <input placeholder='equipment name' type="text" name='name' required />
                <input placeholder='price' type="text" name="price" id="" required />
                <input placeholder='image' type="text" name="image" id="" required />
                <input placeholder='quantity' type="text" name="quantity" id="" required />
                <input placeholder='shipping cost' type="text" name="shipping" id="" required />
                <input className='btn btn-dark' type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddItem;