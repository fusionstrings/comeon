import React, { Component, PropTypes } from 'react';
import {login, validate} from './../../api/index.js';

class LoginForm extends Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e){
		validate(e);
	}
	
	render() {
		const { props } = this;
		
		return (
			<h1>Login</h1>
		);
	}
}

export default LoginForm;