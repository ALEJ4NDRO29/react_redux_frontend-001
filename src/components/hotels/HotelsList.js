import HotelPreview from './HotelPreview';
// import ListPagination from './ListPagination';
import React from 'react';

const HotelList = props => {
  if (!props.hotels) {
    return (
      <div></div>
    );
  }

  if (props.hotels.length === 0) {
    return (
      <div className="article-preview">
        No hotels registered. You are a poor.
      </div>
    );
  }

  return (
    <div>
      {
        props.hotels.map((hotel, index)  => {
          return (
            <div key={hotel.id}>
              <HotelPreview  hotel={hotel}/>
            </div>
          );
        })
      }
    </div>
  );
};

export default HotelList;