import HotelList from '../hotels/HotelsList';
import React from 'react';
// import agent from '../../agent';
import { connect } from 'react-redux';
// import { CHANGE_TAB } from '../../constants/actionTypes';



// const GlobalFeedTab = props => {
//   const clickHandler = ev => {
//     ev.preventDefault();
//     props.onTabClick('all', agent.Articles.all, agent.Articles.all());
//   };
//   return (
//     <li className="nav-item">
//       <a
//         href=""
//         className={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
//         onClick={clickHandler}>
//         Global Feed
//       </a>
//     </li>
//   );
// };

// const TagFilterTab = props => {
//   if (!props.tag) {
//     return null;
//   }

//   return (
//     <li className="nav-item">
//       <a href="" className="nav-link active">
//         <i className="ion-pound"></i> {props.tag}
//       </a>
//     </li>
//   );
// };

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
      <HotelList
        hotels={props.hotels}/>
    </div>
  );
};

export default connect(mapStateToProps)(MainView);