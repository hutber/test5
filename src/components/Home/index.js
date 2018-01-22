import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class Home extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
	      <h1>home</h1>
      </div>
    );
  }
}

function matchStateToProps(state){
  return {
  }
}

function matchDispatchToProps(dispatch){
}

export default connect(matchStateToProps,matchDispatchToProps)(Home);
