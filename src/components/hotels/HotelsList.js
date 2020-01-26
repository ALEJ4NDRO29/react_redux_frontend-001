import React, { Component } from 'react';
import HotelPreview from './HotelPreview';


class HotelsList extends Component {
    render() {
        console.log(this.props.hotels);
        return(<div></div>)

        if (this.props.hotels) {
            return (
                <div>
                    {
                        this.props.hotels.map((hotel, index) => {
                            return (
                                <HotelPreview hotel={hotel} key={index} />
                            );
                        })
                    }
                </div>
            );
        }
    }
}

export default HotelsList;
