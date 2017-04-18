import React from 'react';

import { render } from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Router,Route, IndexRoute, hashHistory, BrowserRouter, browserHistory  } from 'react-router';
 
import Main from "./components/app.jsx";

import EnsureLoggedInContainer from './components/login/EnsureLoggedInContainer.jsx';
import Login from "./components/login/Login.jsx";

import DefaultIndexPage from "./components/DefaultIndexPage.jsx";

import NotFound from "./components/PageNotFound.jsx";

const store = createStore(
  (state ={})=> state,
  applyMiddleware(thunk)
  );

render(<Provider store={store}>
	    <Router history={hashHistory} >
			<Route path="/" component={Login}/>
			
			<Route path='*' component={NotFound} />
			<Route component={EnsureLoggedInContainer}>
    			<Route path="index" component={DefaultIndexPage}/>
    		</Route>
		</Router>
		</Provider>, document.getElementById('root-app'));
