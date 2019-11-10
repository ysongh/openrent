import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateApartment extends Component{
    state = {
        address: "12 Jay St",
        apt: "",
        room: "",
        price: "",
        signedDate: "",
        startDate: "",
        endDate: "",

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
        // const newData = {
        //     address: this.state.address,
        //     floor: this.state.apt,
        //     room: this.state.room,
        //     price: this.state.price,
        //     year: 2020
        // }

        // addressData.push(newData);
        // this.props.history.push("/addressList");
        console.log(this.state.signedDate)
        console.log(this.state.startDate)
        console.log(this.state.endDate)
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
                    <div className="row">
                        <div className="col s12 flex-col">
                            <label htmlFor="price">Lease Signed Date</label>
                            <DatePicker
                                className="input-text2 form-control form-control-lg"
                                placeholderText="2020/01/20"
                                selected={this.state.signedDate}
                                onChange={this.onSetSignedDate.bind(this)} 
                                dateFormat="yyyy/MM/dd" />
                            </div>
                    </div>
                    <div className="row">
                        <div className="col s6 flex-col">
                            <label htmlFor="price">Lease Start Date</label>
                            <DatePicker
                                className="input-text2 form-control form-control-lg"
                                placeholderText="2020/01/20"
                                selected={this.state.startDate}
                                onChange={this.onSetStartDate.bind(this)} 
                                dateFormat="yyyy/MM/dd" />
                        </div>
                        <div className="col s6 flex-col">
                            <label htmlFor="price">Lease End Date</label>
                            <DatePicker
                                className="input-text2 form-control form-control-lg"
                                placeholderText="2020/01/20"
                                selected={this.state.endDate}
                                onChange={this.onSetEndDate.bind(this)} 
                                dateFormat="yyyy/MM/dd" />
                        </div>
                    </div>
                    <button className="btn-large waves-effect waves-light button__submit" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    };
};

export default CreateApartment;