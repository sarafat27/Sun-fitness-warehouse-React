import React from 'react';
import { Table } from 'react-bootstrap';

const EquipmentInfo = ({ equipment }) => {
    const { name, price, quantity, shippingCost } = equipment;
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td style={{ width: '20%' }}>{name}</td>
                        <td style={{ width: '20%' }}>{price}</td>
                        <td style={{ width: '20%' }}>{quantity}</td>
                        <td style={{ width: '20%' }}>{shippingCost}</td>
                        <td style={{ width: '20%' }}>X</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default EquipmentInfo;