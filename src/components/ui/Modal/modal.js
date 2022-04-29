import React from 'react'
// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Close from '@material-ui/icons/Close'
import Button from '../Button'
import styles from './modalStyle'
import CheckInForm from '../../Forms/Administrative/Scheduling/CheckIn/checkin'

const useStyles = makeStyles(styles)

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />
})

export default function Modal(props) {
	const [modal, setModal] = React.useState(false)
	const classes = useStyles()
	return (
		<div>
			<Button color="primary" onClick={() => setModal(true)}>
				{props.buttontext}
			</Button>
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
				open={modal}
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
					<h4 className={classes.modalTitle}>{props.modaltitle}</h4>
				</DialogTitle>
				<DialogContent
					className={classes.modalBody}
					id="modal-slide-description"
				>
					{props.form ? (
						<props.form formprops={props.formprops} setModal={setModal} />
					) : (
						<CheckInForm
							appointment={props.appointment}
							setModal={setModal}
							update={props.update}
						/>
					)}
				</DialogContent>
			</Dialog>
		</div>
	)
}

/*

 */
