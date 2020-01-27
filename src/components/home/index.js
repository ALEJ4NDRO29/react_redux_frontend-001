import React from 'react';
// import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
} from '../../constants/actionTypes';
import HotelsList from '../hotels/HotelsList';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  // appName: state.common.appName,
  // token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
});

class Home extends React.Component {
  componentDidMount() {
    this.props.onLoad(Promise.all([agent.Hotels.getAll()]));
  }

  UNSAFE_componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container page">
                <HotelsList               
                  hotels={this.props.hotels}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);