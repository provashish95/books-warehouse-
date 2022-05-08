import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Stationary.css';
import StationaryItem from '../StationaryItem/StationaryItem';

const Stationary = () => {
    const [stationaryItems, setStationaryItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = ` https://obscure-caverns-72360.herokuapp.com/stationaryItems`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStationaryItems(data.slice(0, 6));
            })
    }, []);


    return (
        <div className="container">
            <div className="row py-5">
                <h4 className='text-center text-color mb-5'>STATIONARY ITEMS</h4>
                {
                    stationaryItems.map(stationaryItem => <StationaryItem key={stationaryItem._id} stationaryItem={stationaryItem}></StationaryItem>)
                }
            </div>
        </div>
    );
};

export default Stationary;