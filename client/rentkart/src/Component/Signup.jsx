import React from "react";

import '../styles/Signup.scss'

const Signup =({ setLogMode })=> {
	const [values,setValue]=React.useState({name:"", email:"", pass:""});
	const [errors,setError]=React.useState({});

	const handleChange =(e)=> {
		setValue({ ...values,
		[e.target.name]:e.target.value,
		[e.target.email]:e.target.value,
		[e.target.pass]:e.target.value,
	})}

	const handleClick =(event)=> {
			event.preventDefault();
	}  
	
	return (
		<div className="container">
			<div className="bodysignup">
				<h1 className="heading">  Create account</h1>
				<form className="form-wrapper">
					<div className="name-wrapper">
						<label className="label">Username</label>
						<input className="input" type='text' name='name' value={values.name} onChange={handleChange} placeholder="ABC"/>
					</div>
					<br/>
					<div className="email-wrapper">
						<label className="label">Email</label>
						<input className="input" type='email'name='email' onChange={handleChange} value={values.email } placeholder="XYZ@GMAIL.COM"/>
					</div>
					<br/>
					<div className="password-wrapper">
						<label className="label">Password</label>
						<input className="input" type='password' name='pass' value={values.pass} onChange={handleChange} placeholder="Consist of min 8 char"/>
					</div>
					<div className="button-container" onClick={handleClick}>
						Submit 
					</div>
				</form>
			</div>
			<span>
				Already have an account? 
				<span className="cursor" onClick={() => setLogMode('login')}>
					{' '} Sign In
				</span> 
			</span>
		</div>
	)}
export default Signup 