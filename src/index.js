import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configureStore from './store';
import App from './App';
import DetailPage from './containers/detailPage';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/detail' component={DetailPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

module.hot.accept();