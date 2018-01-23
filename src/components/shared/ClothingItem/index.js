import React from 'react';
import { formatMoney } from '../../../functions/money'

//Styles
import styles from './style.css';

export default class ClothingItem extends React.Component {
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
					<div className={`glyphicon glyphicon-shopping-cart ${styles.clothingItem__basket}`}></div>
				</div>
			</div>
		);
	}
}
