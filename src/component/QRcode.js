import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
 
class QRcode extends Component {

    handleScan = data => {
        if (data) {
            setTimeout(
                function() {
                    this.props.history.push(`/edit/${data}`)
                }.bind(this),
                1000
            )
        }
    }
    handleError = err => {
        console.error(err);
    }
    render() {
        return (
            <div className="row">
                <p className="qr__title">Scan Code</p>

                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    className="qr-reader" />
            </div>
        )
    }
}

export default QRcode;