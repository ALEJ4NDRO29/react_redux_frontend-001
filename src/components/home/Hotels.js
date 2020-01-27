import React from 'react';

const Hotels = props => {
    const hotels = props.hotels;
  if (hotels) {
    return (
      <div className="tag-list">
        {
          hotels.map(hotel => {
            
            return (
              <p
                href=""
                className="tag-default tag-pill"
                key={hotel.name}>
                {hotel.name}
              </p>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading hotels...</div>
    );
  }
};

export default Hotels;