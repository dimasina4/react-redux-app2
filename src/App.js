import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { updateUser, apiRequest } from './actions/userActions';

class App extends Component {
  constructor(props){
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 2000)
  }
  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
        <input onChange={this.onUpdateUser}/>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user  
  }
}

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App);
