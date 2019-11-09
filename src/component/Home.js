import React, { Component } from 'react';

class Home extends Component{
    state = {
        address: "",
        apt: "",
        room: "",
        price: ""
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

    render(){
        return(
            <div>
                <div className="row">
                    <h1>Open Rent</h1>
                    <div className="row">
                        <div className="input-field col s12">
                        <input
                            type="text" 
                            className="validate"
                            name="address"
                            placeholder="123 Street Ave"
                            value={this.state.address}
                            onChange={this.onChange.bind(this)} />
                        <label htmlFor="address">Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input
                            type="number"
                            className="validate"
                            name="apt"
                            placeholder="1"
                            value={this.state.apt}
                            onChange={this.onChange.bind(this)} />
                        <label htmlFor="apt">Apt Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input
                            type="number" 
                            className="validate"
                            name="room"
                            placeholder="4"
                            value={this.state.room}
                            onChange={this.onChange.bind(this)} />
                        <label htmlFor="room">Number of Rooms</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input
                            type="number"
                            className="validate"
                            placeholder="1900.00"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange.bind(this)} />
                        <label htmlFor="price">Price</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    };
};

export default Home;