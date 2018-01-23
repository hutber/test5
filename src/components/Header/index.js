import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import Basket from '../shared/Basket'

//Styles
import style from './style.css';

export default class Home extends React.Component {
	constructor (props){
		super(props);
	}

	render(){
		return (
			<nav className={style.nav}>
				Simple Fashion
				<Basket />
			</nav>
		);
	}
}
