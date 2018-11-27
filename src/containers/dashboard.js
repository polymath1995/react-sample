import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { simpleAction } from '../actions/actions'
import './App.css';

class Dashboard extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hai
          </p>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.simpleAction}>check redux operation</button>
          <NavLink to='/detail'> <button> Go to detail page </button> </NavLink>
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
