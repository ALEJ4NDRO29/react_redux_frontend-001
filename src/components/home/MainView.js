import HotelList from '../hotels/HotelsList';
import React from 'react';
// import agent from '../../agent';
import { connect } from 'react-redux';
// import { CHANGE_TAB } from '../../constants/actionTypes';


const mapStateToProps = state => ({
  ...state.HotelList
  // tags: state.home.tags,
  // token: state.common.token
});

// const mapDispatchToProps = dispatch => ({
//   onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
// });

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <div className="nav nav-pills outline-active">
          <HotelList
            hotels={props.hotels}/>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MainView);