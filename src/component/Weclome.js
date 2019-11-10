import React from "react";
import { Link } from 'react-router-dom';

const Weclome = () => {
    return(
        <div>
            <h1 className="weclome__title mb-2">Weclome to Open Rent</h1>
            <div className="weclome__buttonGroup">
                <Link to="/" className="waves-effect waves-light btn-large mb-2">
                    Lease Public Key 
                </Link>
                <Link to="/addressList" className="waves-effect waves-light btn-large">
                    Building Addres
                </Link>
            </div>
            
        </div>
    );
};

export default Weclome;