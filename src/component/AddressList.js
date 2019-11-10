import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { addressData } from '../data';

class AddressList extends Component{
    state = {
        data: addressData
    };

    render(){
        return(
            <div>
                <h2>List Apartment</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Address</th>
                        <th>Floor</th>
                        <th>Price</th>
                        <th>Lease Year</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.data.map(address => {
                        return(
                            <tr>
                                <td>{address.address}</td>
                                <td>{address.floor}</td>
                                <td>${address.price}</td>
                                <td>{address.year}</td>
                                <td>
                                <Link to="/edit" className="waves-effect waves-light btn">
                                    Detail
                                </Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                
            </div>
        )
    };
};

export default AddressList;