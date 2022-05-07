import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Supplement from '../Supplement/Supplement';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Supplement></Supplement>
            <Award></Award>
        </div>
    );
};

export default Home;