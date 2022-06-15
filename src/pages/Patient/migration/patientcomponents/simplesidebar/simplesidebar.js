import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: '#BADDFF',
		minHeight: '100vh',
		boxShadow: '0 2px 4px rgba(0,0,0,.15)',
	},
	listitem: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	sideitem: {
		color: '#414141',
	},
}))

export default function SimpleSideBar({ routes }) {
	let { url } = useRouteMatch()
	const classes = useStyles()
	return (
		<List className={classes.list}>
			{routes.map((route) => (
				<ListItem className={classes.listitem} key={route.path}>
					<NavLink
						activeStyle={{ color: '#0232b2' }}
						to={`${url}${route.path}`}>
						<ListItemText
							primary={
								<Typography
									className={classes.sideitem}
									variant="body1">
									{route.label}
								</Typography>
							}
						/>
					</NavLink>
				</ListItem>
			))}
		</List>
	)
}
