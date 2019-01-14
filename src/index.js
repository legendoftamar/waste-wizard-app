import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/app';

//all of the data for the entire application
const store = createStore(allReducers);

ReactDOM.render(
    //every component has access to store
    <Provider store = { store }>
        <App />
    </Provider>
    
, document.getElementById('root'));

