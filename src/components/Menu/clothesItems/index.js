import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//actions
import * as menuActions from '../../../actions/menuAction';

//selectors
import getItemSelector from '../../../selectors/getItemSelector';

//components
import ClothesMenuItem from './ClothesMenuItem';

//Styles
import style from './style.css';

class AllClothesMenuItems extends React.Component {
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
				{this.props.currentlySelectedClothes.map(itemDetails => <ClothesMenuItem details={itemDetails} key={`menuItem_${itemDetails.code}`}/>)}
			</div>
		);
	}
}


function matchStateToProps(state){
	return {
		currentlySelectedClothes: getItemSelector(state)
	}
}

function matchDispatchToProps(dispatch){
	return {
		closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(AllClothesMenuItems);
