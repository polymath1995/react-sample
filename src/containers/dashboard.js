import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { simpleAction, initPorfolioData } from '../actions/actions'
import { Portfolios } from '../portfolios';
import './App.scss';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.simpleAction=this.simpleAction.bind(this);
  }
  
  componentWillMount() {
    this.props.initPorfolioData(Portfolios);
  }

  simpleAction(event) {
    this.props.simpleAction();
  }

  render() {
    const { portfolios } = this.props;
    return (
      <div className="App">
        <header className="App-header">
        <Alert bsStyle="info" style={{ marginTop: 10 }}>
          <strong>Hi WeInvest !</strong> - Suryakumar - suryakumarmurugesan@gmail.com
        </Alert>
          {portfolios && portfolios.map(folio => 
            <div class="row" style={{ padding: 10, width: '100%' }}>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img className="pf-image" src="http://static.asiawebdirect.com/m/phuket/portals/hong-kong-hotels-ws/homepage/nightlife/pagePropertiesImage/hong-kong-nightlife.jpg.jpg" alt="..."/>
                  <div class="caption">
                    <h3>{folio.name}</h3>
                    <ul class="list-group font">
                      <li class="list-group-item list-value">
                        <span className="left"> Volatility </span>
                        <span className="right"> {folio.volatility} </span>
                      </li>
                      <li class="list-group-item list-value">
                        <span className="left"> 1 Month Return </span>
                        <span className="right">
                         2.34% <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                        </span>
                      </li>
                      <li class="list-group-item list-value">
                        <span className="left"> Mean Return </span>
                        <span className="right"> {folio.mean_return} </span>
                      </li>
                      <li class="list-group-item list-value">
                        <span className="left"> Minimum Investment </span>
                        <span className="right">
                         <span style={{ fontSize: 'x-small' }}>{folio.currency}</span> 3,000
                        </span>
                      </li>
                      <li class="list-group-item list-value">
                        <span className="left"> Eligibility </span>
                        <span className="right"> Restricted to accredited investors </span>
                      </li>
                    </ul>
                      <NavLink to={`/detail?id=${folio.id}`}>
                        <Button bsStyle="primary" className="go-to-detail-button"> Explore Investment Idea </Button>
                      </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolios: state.simpleReducer.portfolios,
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  initPorfolioData: (data) => dispatch(initPorfolioData(data)),
 })

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);
