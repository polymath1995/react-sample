import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { simpleAction, initPorfolioData } from '../actions/actions';
import { Portfolios as PortfoliosData } from '../portfolios';
import './App.scss';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableData: [],
      id: -1,
    };
    this.simpleAction=this.simpleAction.bind(this);
    this.afterSaveCell=this.afterSaveCell.bind(this);
    this.setNewWeightsToPortFolio=this.setNewWeightsToPortFolio.bind(this);
    this.setPortFolioDataDetails=this.setPortFolioDataDetails.bind(this);
  }
    
  componentWillMount() {
    const { portfolios } = this.props;
    if (portfolios.length === 0) {
      this.props.initPorfolioData(PortfoliosData);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.portfolios !== this.props.portfolios) {
      this.setPortFolioDataDetails(nextProps.portfolios);
    }
  }

  componentDidMount() {
    this.setPortFolioDataDetails(this.props.portfolios);
  }

  setPortFolioDataDetails(portfolios) {
    const { search } = this.props.location;
    if (portfolios && portfolios.length !== 0 && search) {
      const id = search.split('?id=')[1];
      this.setState({ id });
      const constituents = portfolios.find(folio => folio.id === Number(id)).constituents;
      var tableData = [];
      var smallRow = {};
      constituents.forEach(function (value) {
          var type = value.instrument.type;
          var mainRow = tableData.find(data => data.type === type);
          if (mainRow) {
                mainRow.totalWeight = parseFloat(Number(mainRow.totalWeight) + Number(value.weight)).toFixed(2);
                smallRow = {};
                smallRow.id = value.instrument.id;
                smallRow.name = value.instrument.name;
                smallRow.weight = value.weight;
                smallRow.isLocked = value.isLocked;
                mainRow.expand.push(smallRow);
          } else {
                mainRow = {};
                mainRow.type = type;
                mainRow.totalWeight = value.weight;
                smallRow = {};
                smallRow.id = value.instrument.id;
                smallRow.name = value.instrument.name;
                smallRow.weight = value.weight;
                smallRow.isLocked = value.isLocked;
                mainRow.expand = [smallRow];
                tableData.push(mainRow);
        }
      });
      this.setState({ tableData });
    }
  }

  afterSaveCell(oldValue, newValue, row, column) {
    var { portfolios } = this.props;
    const isValueIncreased = oldValue < newValue;
    const { search } = this.props.location;
    if (column.dataField === 'weight' && row.isLocked) {
      this.props.initPorfolioData(portfolios);
      this.setPortFolioDataDetails(portfolios);
      return;
    }
    if (search) {
      const id = search.split('?id=')[1];
      const constituents = portfolios.find(folio => folio.id === Number(id)).constituents;
      if (column.dataField === "isLocked") {
        portfolios.find(folio => folio.id === Number(id)).constituents
        .find(data => data.instrument.id === row.id).isLocked = newValue === "Y";
        this.props.initPorfolioData(portfolios);
        this.setPortFolioDataDetails(portfolios);
      } else {
        const wholeData = constituents.map(data => {
          var obj = {};
          obj.weight = data.weight;
          obj.isLocked = data.isLocked;
          obj.id = data.instrument.id;
          return obj;
        });
        const weights = wholeData.filter(x => ((x.id !== row.id) && !x.isLocked)).map(data => data.weight);
        const sumOfWeights = weights.reduce((a, b) => a + b, 0);
        var diff;
        if (isValueIncreased) {
          diff = (newValue - oldValue) / sumOfWeights;
        } else {
          diff = (oldValue - newValue) / sumOfWeights;
        }
        wholeData.forEach(data => {
          if (data.id !== row.id) {
            if (isValueIncreased) {
              data.newWeight= data.weight - (diff*data.weight);
            } else {
              data.newWeight = data.weight + (diff*data.weight);
            }
          } else {
            data.newWeight= Number(newValue);
          }
        });
        this.setNewWeightsToPortFolio(wholeData);
      }
    }
  }

  setNewWeightsToPortFolio(wholeData) {
    var { portfolios } = this.props;
    portfolios.find(folio => folio.id === Number(this.state.id)).constituents.forEach(data => {
      if (!data.isLocked) {
        const newWeight = wholeData.find(x => x.id === data.instrument.id).newWeight;
        data.weight = Number(parseFloat(newWeight).toFixed(2));
      }
    });
    this.props.initPorfolioData(portfolios);
    this.setPortFolioDataDetails(portfolios);
  }
  
  simpleAction(event) {
    this.props.simpleAction();
  }

  render() {
    const { tableData } = this.state;
    const columns = [{
      dataField: 'type',
      text: 'Type'
    }, {
      dataField: 'totalWeight',
      text: 'Total Weight'
    }];
    const smallRowColumns = [{
      dataField: 'name',
      text: 'Name',
      editable: false,
    }, {
      dataField: 'isLocked',
      text: 'Lock (Click to edit)',
      editor: {
        type: Type.CHECKBOX,
        value: 'Y:N'
      }
    }, {
      dataField: 'weight',
      text: 'Weight (Click to edit and press enter to save)',
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: 'Price should be numeric'
          };
        }
        return true;
      }
    }];
    const expandRow = {
      renderer: row => ( <div style={{ color: 'black' }}>
        <BootstrapTable keyField="id" data={ row.expand }
          columns={ smallRowColumns }
          cellEdit={ cellEditFactory({
             mode: 'click',
             afterSaveCell: this.afterSaveCell,
             blurToSave: true
          }) } />
        </div>
      ),
      expanded: tableData.map(data => data.type),
    };
    return (
      <div className="App">
        <header className="App-header2">
          <NavLink to='/'> <button style={{ margin: 10 }}> Go back to List page </button> </NavLink> <br />
          <div style={{ width: '100%', padding: 20 }}>
            <BootstrapTable keyField="type" data={ tableData } columns={ columns } expandRow={ expandRow } />
          </div>
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
