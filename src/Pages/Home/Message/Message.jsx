import React from 'react';
import img1 from '../../../assets/home/chef-service.jpg'

const Message = () => {
    return (
        <div className="hero h-[70vh] mb-20" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center bg-white w-10/12">
                <div className="max-w-md py-10">
                    <h1 className="mb-5 text-4xl font-bold">BISTRO BOSS</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Message;