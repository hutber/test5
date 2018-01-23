import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//actions
import * as menuActions from '../../../actions/menuAction';

//Styles
import style from '../style.css';

class ClothesMenuItem extends React.Component {
	constructor (props){
		super(props);

		this.closeMenu = this.closeMenu.bind(this);
	}

	closeMenu() {
		this.props.closeMenu();
	}

	render(){
		return (
			<div>
				<img src=${this.props.details.img} alt=""/>
			</div>
		);
	}
}


function matchStateToProps(state){
	return {
		menuState: state.menu.open,
	}
}

function matchDispatchToProps(dispatch){
	return {
		closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(ClothesMenuItem);
