import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { simpleAction } from '../actions/actions'
import './App.scss';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.simpleAction=this.simpleAction.bind(this);
  }
  
  simpleAction(event) {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header2">
          <p>
            Hai
          </p>
          <NavLink to='/'> <button> Go back to List page </button> </NavLink>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
