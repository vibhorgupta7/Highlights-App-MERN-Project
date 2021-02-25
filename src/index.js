// npm install axios (for making API requests) moment(moment Js is a library to work with time & date) react-file-base64(to convert our images) redux redux-thunk(used for async actions using redux)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';     // Provides kkeps track of the store which is the gloabal state and that allows us to access that store from anywhere we want. We dont have to be in any parent or child compponent to access state
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>        
        <App />
    </Provider>
                                            // now our apllication is using Redux
    , document.getElementById('root'));




