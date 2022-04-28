import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function NavLinkButton({ to, text }) {
	return (
		<NavLink to={to}>
			<Typography>{text}</Typography>
		</NavLink>
	)
}
