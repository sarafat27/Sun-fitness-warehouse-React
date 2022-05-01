import React from 'react';
import { Table } from 'react-bootstrap';
import useEquipment from '../../hooks/useEquipment';
import EquipmentInfo from '../EquipmentInfo/EquipmentInfo';

const ManageInventory = () => {
    const [equipments] = useEquipment();
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
                    equipments.map(equipment => <EquipmentInfo
                        key={equipment._id}
                        equipment={equipment}
                    ></EquipmentInfo>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;