import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//actions
import * as menuAction from '../../../actions/menuAction';

//Styles
import style from './style.css';

class Basket extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
  	this.props.openMenu();
  }

  render(){
    return (
      <div className={style.basket} onClick={this.openMenu}>
	      <span className={`glyphicon glyphicon-shopping-cart ${style.basket}`}></span>
        <div className={style.number}>{this.props.numberOfItems}</div>
      </div>
    );
  }
}

function matchStateToProps(state){
  return {
	  numberOfItems: state.basketReducer.numberOfItems,
	  menuState: state.menu.open
  }
}

function matchDispatchToProps(dispatch){
	return {
		openMenu: bindActionCreators(menuAction.openMenu, dispatch)
	}
}

export default connect(matchStateToProps,matchDispatchToProps)(Basket);

