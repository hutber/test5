import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Actions
import * as clothesAPIAction from '../../actions/clothesAPI';

//Components
import Welcome from './states/Welcome';
import Loading from './states/Loading';
import ClothesContent from './states/ClothesContent';

class Clothes extends React.Component {
	constructor (props){
		super(props);

		this.ShopFloor = this.shopFloor.bind(this);
	}

	componentDidMount() {
		const urlToCLotheAPI = 'https://api.myjson.com/bins/zfebv';
		this.props.getClothesAPIAction();
		fetch(urlToCLotheAPI)
			.then(response => response.json())
			.then((data) => this.props.resolvedGetClothesAction(data));
	}

	shopFloor() {
		if(this.props.clothesAPI.clothes.length > 0){
			return <ClothesContent />
		}else if(this.props.clothesAPI.inApiCall === true){
			return <Loading />
		}else{
			return <Welcome />
		}
	}

	render(){
		return (
			<div>
				<h1>Shop</h1>
				<this.ShopFloor />
			</div>
		);
	}
}

function matchStateToProps(state){
	return {
		clothesAPI: state.clothesAPI
	}
}

function matchDispatchToProps(dispatch){
	return {
		getClothesAPIAction: bindActionCreators(clothesAPIAction.getClothes, dispatch),
		resolvedGetClothesAction: bindActionCreators(clothesAPIAction.resolvedGetClothes, dispatch)
	}
}

export default connect(matchStateToProps,matchDispatchToProps)(Clothes);
