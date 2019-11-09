import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <h1>Open Rent</h1>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="text" className="validate" placeholder="123 Street Ave"/>
                        <label for="address">Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="number" className="validate" placeholder="1"/>
                        <label for="apt">Apt Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="number" className="validate" placeholder="4"/>
                        <label for="room">Number of Rooms</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="number" className="validate" placeholder="1900.00"/>
                        <label for="price">Price</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Home;