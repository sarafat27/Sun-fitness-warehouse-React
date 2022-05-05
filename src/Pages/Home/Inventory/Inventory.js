import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEquipment from '../../../hooks/useEquipment';
import CardBox from '../CardBox/CardBox';


const Inventory = () => {
    const [equipments] = useEquipment();

    return (
        <div id='items'>
            <h2 className='text-center my-5 text-success'>Inventory items</h2>
            <div className='row mx-5'>
                {
                    equipments.slice(0, 6).map(equipment => <CardBox
                        key={equipment._id}
                        equipment={equipment}
                    ></CardBox>)
                }
            </div>
            <Button as={Link} to='/manageInventory' variant='success w-50 d-block mx-auto my-5'>Manage inventory</Button>
        </div>
    );
};

export default Inventory;