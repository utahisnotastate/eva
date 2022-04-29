import React from 'react'
// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '../Button'
import Close from '@material-ui/core/SvgIcon/SvgIcon'
import DialogContent from '@material-ui/core/DialogContent'
import styles from './modalStyle'
import CheckInForm from '../../Forms/Administrative/Scheduling/CheckIn/checkin'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(styles)

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />
})
export default function SlotDialog(props) {
	const classes = useStyles()
	return (
		<Dialog
			aria-describedby="modal-slide-description"
			aria-labelledby="modal-slide-title"
			classes={{
				root: classes.center,
				paper: classes.modal,
			}}
			disableBackdropClick
			fullScreen
			fullWidth
			keepMounted
			onClose={() => setModal(false)}
			open
			transition={Transition}
		>
			<DialogTitle
				className={classes.modalHeader}
				disableTypography
				id="classic-modal-slide-title"
			>
				<Button
					aria-label="Close"
					className={classes.modalCloseButton}
					color="transparent"
					justIcon
					key="close"
					onClick={() => setModal(false)}
				>
					<Close className={classes.modalClose} />
				</Button>
				<h4 className={classes.modalTitle}>Patient Check In</h4>
			</DialogTitle>
		</Dialog>
	)
}

/*
<DialogContent className={classes.modalBody} id="modal-slide-description">
				<CheckInForm />
			</DialogContent>
 */
