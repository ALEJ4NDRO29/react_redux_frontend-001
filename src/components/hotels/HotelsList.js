import React, { Component } from 'react';
import HotelPreview from './HotelPreview';


class HotelsList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hotels.map(hotel, index => {
                        return (
                            <HotelPreview hotel={hotel} key={index}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default HotelsList;
