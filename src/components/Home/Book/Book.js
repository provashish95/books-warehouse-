import React from 'react';
import './Book.css';

const Book = () => {
    return (
        <>
            <div className="card mx-auto card-style  shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                <img src="https://i.ibb.co/McFnDym/personal-trainer.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-color">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-style d-block mx-auto'>Delivery now</button>
                </div>
            </div>
            <div className="card mx-auto card-style  shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                <img src="https://i.ibb.co/McFnDym/personal-trainer.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-color">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-style d-block mx-auto'>Delivery now</button>
                </div>
            </div>
            <div className="card mx-auto card-style  shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                <img src="https://i.ibb.co/McFnDym/personal-trainer.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-color">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-style d-block mx-auto'>Delivery now</button>
                </div>
            </div>

        </>
    );
};

export default Book;