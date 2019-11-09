import React from "react";
import { Link } from 'react-router-dom';

const Weclome = () => {
    return(
        <div>
            <h1>Weclome</h1>
            <Link to="/edit" className="waves-effect waves-light btn">
                Address
            </Link>
        </div>
    );
};

export default Weclome;