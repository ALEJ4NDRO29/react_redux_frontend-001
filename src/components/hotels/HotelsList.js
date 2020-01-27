import HotelPreview from './HotelPreview';
// import ListPagination from './ListPagination';
import React from 'react';

const HotelList = props => {
  if (!props.hotels) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.hotels.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.hotels.map(hotel => {
          return (
            <div>
              {hotel.name}
              <HotelPreview  hotel={hotel} key={hotel.id} />
            </div>
          );
        })
      }
    </div>
  );
};

export default HotelList;