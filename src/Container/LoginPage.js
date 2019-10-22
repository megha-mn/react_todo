import React,{Component} from 'react';
import InputField from '../Components/InputField';
import { Formik } from 'formik';
import Button from '../Components/Button';
import {FormElement} from '../StyledComponent/LoginPage.style'

class LoginPage extends Component{
	state = {
		email : "email",
		password : "password",
		submitted : false
	}
  render(){
		return(
			<>
			{!this.state.submitted && 
			<Formik initialValues= {
				{email : '',
				password: ''}}
				validate ={values => {
					let errors = {};
					if (!values.email) {
						errors.email = 'Please enter Email address';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}

					if (!values.password) {
						errors.password = 'Please enter Password';
					} 
					return errors;
				}} 
				onSubmit={(values) => 
				this.setState({submitted : true})
				}
				>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
					}) =>
					<form onSubmit={handleSubmit}>
						<FormElement>
							<div className="formElement">
								<InputField 
									labelName = "Email"
									type="email" 
									name={this.state.email}
									value={values.email} 
									placeholder="Enter your email address"
									onChange={handleChange} />
									
								{errors.email && touched.email && errors.email}
							</div>

							<div>
								<InputField 
									labelName= "Password"
									type="password" 
									name={this.state.password}
									value={values.password} 
									placeholder="Enter your password"
									onChange={handleChange} />
									{errors.password && touched.password && errors.password}
							</div>
								<Button name="Login" />
						</FormElement>
					</form>
					}

			</Formik>
			}

			{this.state.submitted && 
				<div>Heyy</div>
			}
		</>
		);
	}
}

export default LoginPage;