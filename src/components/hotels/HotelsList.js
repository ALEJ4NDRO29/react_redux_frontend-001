import HotelPreview from './HotelPreview';
// import ListPagination from './ListPagination';
import React from 'react';
import { Spinner } from 'react-bootstrap';

const HotelList = props => {
  if (!props.hotels) {
    return (
      <div>
        <Spinner className="loadSpinner" animation="grow" />
      </div>
    );
  }

  if (props.hotels.results.length === 0) {
    return (
      <div className="article-preview">
        No hotels registered. You are a poor.
      </div>
    );
  }

  return (

    <div>
      {
        props.hotels.results.map((hotel, index)  => {
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