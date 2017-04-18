import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

import validateInput from '../../validation/valid.js';

const store = createStore(
  (state ={})=> state,
    applyMiddleware(thunk)
  );
class LoginPage extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
    username:'',
    password:'',
    errors:''
   }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
   }
   onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

   isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onClick(e) {
    e.preventDefault();
    if (this.isValid()) {
      //this.setState({ errors});
      this.props.UserLoginAction(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors })
      );
    }
  }

   getRowMarkup() {
    let _this = <div>
              <div className="login">
               <div className="login-header">
               <h1>Login</h1>
               </div>
               <div className="login-form">
               <h3>Username:</h3>
               <input 
               type="text" 
               value={this.state.username} 
               onChange={this.onChange} 

               name ="username" 
               placeholder="username" 
               />
               <span className='errors'>{this.state.errors}</span>
               <h3>Password:</h3>
               <input 
               type='password' 
               value={this.state.password}
               onChange={this.onChange}
                
               name ='password' 
               placeholder="password"
               />
               <span className='errors'>{this.state.errors}</span>
               <input 
               type="button" 
               value="Login" 
               onClick ={this.onClick} 
               className="login-button"
               />
               
               </div>
               </div>
               <div className="error-page">
               <div className="try-again">Error: Try again?</div>
              </div>
              </div>
      ;

     return _this;    
    
   }
   render() {
     const { errors, username, password} = this.state;
     return this.getRowMarkup();
   }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default LoginPage;



