import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { formatMoney } from '../../../functions/money'

//actions
import * as clothesAction from '../../../actions/clothesAction';
import * as basketAction from '../../../actions/basketAction';

//Styles
import styles from './style.css';

class ClothingItem extends React.Component {
	constructor(props){
		super(props);

		this.addToBasket = this.addToBasket.bind(this);
	}

	addToBasket() {
		this.props.incrementBasket();
		this.props.addItemToBasket(this.props.details.code);
	}

	render(){
		return (
			<div className={styles.clothingItem}>
				<img src={this.props.details.image} alt={this.props.details.name}/>
				<div className={styles.clothingItem__details}>
					<div className={styles.clothingItem__productDetails}>
						{this.props.details.name}
						<span className={styles.clothingItem__code}>({this.props.details.code})</span>
						<div className={styles.clothingItem__price}>
							{formatMoney(this.props.details.price)}
						</div>
					</div>
					<div onClick={this.addToBasket} className={`glyphicon glyphicon-shopping-cart ${styles.clothingItem__basket}`}></div>
				</div>
			</div>
		);
	}
}

function matchStateToProps(state){
	return {
		menuState: state.menu.open
	}
}

function matchDispatchToProps(dispatch){
	return {
		addItemToBasket: bindActionCreators(clothesAction.addItemToBasket, dispatch),
		incrementBasket: bindActionCreators(basketAction.addItem, dispatch)
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(ClothingItem);
