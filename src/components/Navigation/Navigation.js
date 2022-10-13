import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (!isSignedIn) {
		return (
			<div className=''>
				<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<p
						onClick={() => onRouteChange('signin')}
						className='f3 link dim black pa3 pointer bold'
					>
						Sign In
					</p>
					<p
						onClick={() => onRouteChange('register')}
						className='f3 link dim black pa3 pointer'
					>
						Register
					</p>
				</nav>
			</div>
		)
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p
					onClick={() => onRouteChange('signout')}
					className='f3 link dim black pa3 pointer'
				>
					Sign Out
				</p>
			</nav>
		)
	}
}

export default Navigation
