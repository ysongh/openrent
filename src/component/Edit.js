import React, { Component } from 'react';

import { addressData } from '../data';

class Edit extends Component{
    state = {
        address: "",
        apt: "",
        room: "",
        price: "",
        signedDate: "",
        startDate: "",
        endDate: "",
        landLordName: "",
        landLordAddress: "",
        yes: "",
        no: ""
    }

    componentDidMount(){
        addressData.forEach(address => {
            if(address.id === this.props.match.params.id){
                this.setState({
                    address: address.address,
                    apt: address.floor,
                    room: address.room,
                    price: address.price,
                    signedDate: address.signedDate,
                    startDate: address.startDate,
                    endDate: address.endDate,
                    landLordName: address.landLordName,
                    landLordAddress: address.landLordAddress,
                    yes: "",
                    no: ""
                })
            }
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
        console.log(this.state.address);
        console.log(this.state.apt);
        console.log(this.state.room);
        console.log(this.state.price);
    }

    onSetSignedDate(date) {
        this.setState({
            signedDate: date
        });
    }

    onSetStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    onSetEndDate(date) {
        this.setState({
            endDate: date
        });
    }

    render(){
        return(
            <div className="editApartment">
                <div className="row">
                    <h2 className="weclome__title">View Lease</h2>
                    <div className="row">
                        <div className="col s12">
                            <p className="apartmentList__key">Public Key - 0x7099A33596e3ED69306A274122443cD430639C03</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text" 
                            className="validate"
                            name="address"
                            placeholder="123 Street Ave"
                            value={this.state.address}
                            onChange={this.onChange.bind(this)}
                            disabled />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                        <label htmlFor="apt">Apt Number</label>
                        <input
                            type="text"
                            className="validate"
                            name="apt"
                            placeholder="1"
                            value={this.state.apt}
                            onChange={this.onChange.bind(this)}
                            disabled />
                        </div>
                        <div className="col s6">
                        <label htmlFor="room">Number of Rooms</label>
                        <input
                            type="number" 
                            className="validate"
                            name="room"
                            placeholder="4"
                            value={this.state.room}
                            onChange={this.onChange.bind(this)}
                            disabled />
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
                            onChange={this.onChange.bind(this)}
                            disabled />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 flex-col">
                            <label htmlFor="price">Lease Signed Date</label>
                            <input
                                type="text" 
                                className="validate"
                                placeholder="2020/01/20"
                                value={this.state.signedDate}
                                disabled />
                            </div>
                    </div>
                    <div className="row">
                        <div className="col s6 flex-col">
                            <label htmlFor="price">Lease Start Date</label>
                            <input
                                type="text" 
                                className="validate"
                                placeholder="2020/01/20"
                                value={this.state.startDate} 
                                disabled/>
                        </div>
                        <div className="col s6 flex-col">
                            <label htmlFor="price">Lease End Date</label>
                            <input
                                type="text" 
                                className="validate"
                                placeholder="2020/01/20"
                                value={this.state.endDate}
                                disabled />
                        </div>
                        <div className="row">
                            <div className="col s12">
                            <label htmlFor="landLordName">Landlord Name</label>
                            <input
                                type="text" 
                                className="validate"
                                name="landLordName"
                                placeholder="Jay Reality LLC"
                                value={this.state.landLordName}
                                onChange={this.onChange.bind(this)}
                                disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                            <label htmlFor="landLordAddress">Landlord Address</label>
                            <input
                                type="text" 
                                className="validate"
                                name="landLordAddress"
                                placeholder="17 Lorimer street, 11211,  NYC"
                                value={this.state.landLordAddress}
                                onChange={this.onChange.bind(this)}
                                disabled />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <label htmlFor="landLordAddress">Is Rent Stabilize?</label>
                                <br />
                                <label className="mr-2">
                                    <input
                                        type="checkbox"
                                        name="yes"
                                        onChange={this.onChange.bind(this)}
                                        disabled />
                                    <span>Yes</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="no"
                                        onChange={this.onChange.bind(this)}
                                        disabled />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className="btn-large waves-effect waves-light button__submit" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    };
};

export default Edit;