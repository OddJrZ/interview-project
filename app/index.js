import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';
import allReducers from './reducers';

const store = createStore(allReducers);

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);