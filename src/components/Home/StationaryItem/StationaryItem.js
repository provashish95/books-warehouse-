import React from 'react';

const StationaryItem = ({ stationaryItem }) => {

    return (
        <div className="card mx-auto border-style shadow-lg p-3 mb-5 bg-body" style={{ width: '18rem' }}>
            <img src={stationaryItem.img} className="border-style img-fluid card-img-top" alt="..." />
        </div>
    );
};

export default StationaryItem;