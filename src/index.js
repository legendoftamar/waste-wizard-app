import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppProvider } from '@shopify/polaris';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import App from './components/app';

require('./index.css');

var thunk = require('redux-thunk').default

//all of the data for the entire application
const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    //every component has access to store
    <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>

    , document.getElementById('root'));

