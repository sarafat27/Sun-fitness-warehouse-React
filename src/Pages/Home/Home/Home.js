import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Supplement from '../Supplement/Supplement';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Supplement></Supplement>
        </div>
    );
};

export default Home;