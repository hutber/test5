import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Components
import Header from '../Header';
import Menu from '../Menu';
import ShopContent from '../ShopContent';

export default class Home extends React.Component {
	constructor (props){
		super(props);
		this.state = {

		}
	}

	render(){
		return (
			<div>
				<Header />
				<Menu />
				<ShopContent />
			</div>
		);
	}
}
