import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Styles
import style from './style.css';

class Basket extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <nav className={style.basket}>
	      <span className="glyphicon glyphicon-shopping-cart"></span>
        <div className={style.number}>{this.props.numberOfItems}</div>
      </nav>
    );
  }
}

function matchStateToProps(state){
  return {
	  numberOfItems: state.basketReducer.numberOfItems
  }
}

export default connect(matchStateToProps)(Basket);
