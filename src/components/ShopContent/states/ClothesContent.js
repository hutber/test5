import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Components
import ClothingItem from '../../shared/ClothingItem'

class ClothesContent extends React.Component {
	render(){
		return (
			<div>
				{
					this.props.clothes.map((item , index)=> {
						return <ClothingItem details={item} key={`item_${index}`} />;
					})
				}
			</div>
		);
	}
}

function matchStateToProps(state){
	return {
		clothes: state.clothesAPI.clothes
	}
}

export default connect(matchStateToProps)(ClothesContent);
