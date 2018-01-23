import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { formatMoney } from '../../../functions/money';

//actions
import * as menuActions from '../../../actions/menuAction';

//Styles
import style from './style.css';

class ClothesMenuItem extends React.Component {
	constructor (props){
		super(props);

	}

	render(){
		return (
			<div className={style.menuItem}>
				<div className={style.imgContainer}><img src={this.props.details.image} alt={this.props.details.name}/></div>
				<div className={style.itemContent}>
					<div className={style.itemDetails}>{this.props.details.name} <span>({this.props.details.code})</span></div>
					<div className={style.itemCost}>{formatMoney(this.props.details.price)}</div>
				</div>
				<div className={style.itemAmounts}>
					<div className={style.circle}>-</div>
					<div className={style.total}>{this.props.clothes[[this.props.details.code]]}</div>
					<div className={style.circle}>+</div>
				</div>
			</div>
		);
	}
}


function matchStateToProps(state){
	return {
		menuState: state.menu.open,
		clothes: state.clothes
	}
}

function matchDispatchToProps(dispatch){
	return {
		closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(ClothesMenuItem);
