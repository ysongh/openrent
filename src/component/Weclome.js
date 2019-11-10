import React from "react";
import { Link } from 'react-router-dom';

const Weclome = () => {
    return(
        <div className="weclome">
            <h1 className="weclome__title mb-2">Weclome to Open Rent</h1>
            <p className="weclome__paragraph">Bringing transparency to New York Rental Market</p>
            <div className="weclome__area">
                <div className="row">
                    <div className="col s10">
                        <label for="input_text">Lease Public Key</label>
                        <input id="input_text" type="text" />
                    </div>
                    <div className="col s2">
                        <Link to="/" className="waves-effect waves-light btn translateY-2">
                             >
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10">
                        <label for="input_text">Building Address</label>
                        <input id="input_text" type="text" />
                    </div>
                    <div className="col s2">
                        <Link to="/addressList" className="waves-effect waves-light btn translateY-2">
                            >
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default Weclome;