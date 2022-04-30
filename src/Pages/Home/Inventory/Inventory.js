import React, { useEffect, useState } from 'react';
import CardBox from '../CardBox/CardBox';


const Inventory = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, []);

    return (
        <div>
            <h2 className='text-center my-3'>Inventory items</h2>
            <div className='row'>
                {
                    equipments.map(equipment => <CardBox
                        key={equipment._id}
                        equipment={equipment}
                    ></CardBox>)
                }
            </div>
        </div>
    );
};

export default Inventory;