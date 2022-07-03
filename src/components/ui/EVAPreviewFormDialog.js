import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function EVAPreviewFormDialog({
	openDialogButtonText,
	children,
	...props
}) {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				{openDialogButtonText}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Preview</DialogTitle>
				<DialogContent>Test</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Dismiss</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
