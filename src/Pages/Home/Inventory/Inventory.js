import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEquipment from '../../../hooks/useEquipment';
import CardBox from '../CardBox/CardBox';


const Inventory = () => {
    const [equipments] = useEquipment();

    return (
        <div>
            <h2 className='text-center my-3'>Inventory items</h2>
            <div className='row'>
                {
                    equipments.slice(0, 3).map(equipment => <CardBox
                        key={equipment._id}
                        equipment={equipment}
                    ></CardBox>)
                }
            </div>
            <Button as={Link} to='/manageInventory' variant='dark w-50 d-block mx-auto my-5'>Manage inventory</Button>
        </div>
    );
};

export default Inventory;