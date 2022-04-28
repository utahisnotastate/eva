import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function NavLinkButton({ to, buttonText, ...rest }) {
	return (
		<NavLink to={to} {...rest}>
			<Button>{buttonText}</Button>
		</NavLink>
	)
}
