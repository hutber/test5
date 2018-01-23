import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//actions
import * as menuActions from '../../actions/menuAction';

//selectors
import getItemSelector from '../../selectors/getItemSelector';

//Styles
import style from './style.css';

class Menu extends React.Component {
	constructor (props){
		super(props);

		this.closeMenu = this.closeMenu.bind(this);
	}

	closeMenu() {
		this.props.closeMenu();
	}

	render(){
		return (
			<div className={this.props.menuState === true ? `${style.menu} ${style.menuOpen}` : style.menu}>
				<div className={style.nav}>
					<h2>Simple Fashion</h2>
					<div className={style.close} onClick={this.closeMenu}>X</div>
				</div>
				<div className={style.menuContent}>
					<h3>My Basket</h3>
				</div>
				<div className={style.items}>

				</div>
			</div>
		);
	}
}


function matchStateToProps(state){
	return {
		menuState: state.menu.open,
		currentlySelectedClothes: getItemSelector(state)
	}
}

function matchDispatchToProps(dispatch){
	return {
		closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(Menu);
