import React from 'react';
import CommentHotelList from './CommentHotelList'
// import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import '../../App.css';
import { HOTEL_DETAILS_LOADED } from '../../constants';

const Promise = global.Promise;

const mapStateToProps = state => {
	return {
		hotel: state.hotelList.hotel
	};

};

const mapDispatchToProps = dispatch => ({
	onLoad: (payload) =>
		dispatch({ type: HOTEL_DETAILS_LOADED, payload }),
});



class HotelDetails extends React.Component {
	constructor(props) {
		super(props);
		this.comment = {comments: [{"id": 1,"body": "asdadsaddsa"},{"id": 2, "body": "hola soc sanesga"}]}
		this.props.onLoad(Promise.all([agent.Hotels.get(this.props.match.params.id)]));
	}

	UNSAFE_componentWillUnmount() {
		this.props.onUnload();
	}

	render() {
		if (!this.props.hotel) {
			return (
				<div className="spinner-center">
					<Spinner className="loadSpinner" animation="grow" />
				</div>
			);
		}

		return (
			<div>
				<p>{this.props.hotel.name}</p>
				<p>{this.props.hotel.stars}</p>
				<p>{this.props.hotel.location}</p>
				{
					this.comment.comments.map((comment, index)  => {
						return (
							<div key={comment.id}>
								<CommentHotelList comment={comment}/>
							</div>
						);
					})
				}
				{/* 
					TODO: 
						- Un usuario logueado podrá hacer comentarios
							Ej: <CommentHotelIntput/> 
								- (Solo visible si hay un usuario logueado)
								- (Componente con campo de texto y botón de envío)
						- Listado de comentarios que tiene este hotel
							Ej: <CommentHotelList/>
				*/}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);