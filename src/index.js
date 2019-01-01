import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import reducers from '../src/reducers';
import Layout from '../src/containers/layout/layout';
import Phones from '../src/containers/phones/phones';
import Phone from '../src/containers/phone/phone';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones} />
            </Route>
            <Route path='/phones/:id' component={Phone} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
