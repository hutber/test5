//Core App things
import React, {Component} from 'react'
import {Route} from 'react-router';

//Core Pages
import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
};
