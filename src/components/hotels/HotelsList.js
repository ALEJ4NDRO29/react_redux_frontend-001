import React, { Component } from 'react';
import HotelPreview from './HotelPreview';


class HotelsList extends Component {

    constructor(props) {
        super(props);
        this.state = {hotels : []}
    }

    render() {
        console.log(this.props.hotels);
        
        if (this.props.hotels != null) {
            this.props.hotels.then((hotels) => {
                console.log(hotels['hotels']);
                this.setState({hotels: hotels})
            });
        }
        
        if (this.state.hotels != null) {
            return (
                <div>
                    {
                        this.state.hotels['hotels'].map((hotel, index) => {
                            return (
                                <HotelPreview hotel={hotel} key={index} />
                            );
                        })
                    }
                </div>
            );
        } else {
            return(<div>
                Loading...
            </div>)
        }
    }
}

export default HotelsList;
