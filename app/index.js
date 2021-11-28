import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';

function data(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
      default:
        return state
    }
}

const store = createStore(data, ["INIT"])

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);