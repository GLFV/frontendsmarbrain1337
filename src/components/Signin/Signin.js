import React from 'react'
import './Signin.css'
class Signin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signInEmail: '',
			signInPassword: '',
		}
	}

	onEmailChange = event => {
		this.setState({ signInEmail: event.target.value })
	}

	onPasswordChange = event => {
		this.setState({ signInPassword: event.target.value })
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signIn', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			}),
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user)
					this.props.onRouteChange('home')
				}
			})
	}

	render() {
		return (
			<div>
				<article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5'>
					<main className='pa4 black-80'>
						<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
							<legend className='f1 fw6 ph0 mh0'>Sign In</legend>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6'>Email</label>
								<input
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-address'
									onChange={this.onEmailChange}
								/>
							</div>
							<div className='mv3'>
								<label className='db fw6 lh-copy f6'>Password</label>
								<input
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
									onChange={this.onPasswordChange}
								/>
							</div>
						</fieldset>
						<div className='container center'>
							<div className=''>
								<button
									onClick={this.onSubmitSignIn}
									className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pr2 left'
								>
									Sign In
								</button>
							</div>
							<div className=''>
								<input
									onClick={() => this.props.onRouteChange('register')}
									className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer'
									type='submit'
									value='Register'
								/>
							</div>
						</div>
					</main>
				</article>
			</div>
		)
	}
}

export default Signin
