import React, { Component } from 'react';

import { addressData } from '../data';

class CreateApartment extends Component{
    state = {
        address: "12 Jay St",
        apt: "",
        room: "",
        price: ""
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
        const newData = {
            address: this.state.address,
            floor: this.state.apt,
            room: this.state.room,
            price: this.state.price,
            year: 2020
        }

        addressData.push(newData);
        this.props.history.push("/addressList");
    }

    render(){
        return(
            <div className="editApartment">
                <div className="row">
                    <h2 className="weclome__title">Create Lease</h2>
                    <div className="row">
                        <div className="col s12">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text" 
                            className="validate"
                            name="address"
                            placeholder="123 Street Ave"
                            value={this.state.address}
                            onChange={this.onChange.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <label htmlFor="apt">Apt Number</label>
                        <input
                            type="text"
                            className="validate"
                            name="apt"
                            placeholder="1"
                            value={this.state.apt}
                            onChange={this.onChange.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <label htmlFor="room">Number of Rooms</label>
                        <input
                            type="number" 
                            className="validate"
                            name="room"
                            placeholder="4"
                            value={this.state.room}
                            onChange={this.onChange.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="validate"
                            placeholder="1900.00"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange.bind(this)} />
                        </div>
                    </div>
                    <button className="btn-large waves-effect waves-light button__submit" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    };
};

export default CreateApartment;