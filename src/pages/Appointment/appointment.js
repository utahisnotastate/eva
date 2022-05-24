import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { FormikWizard } from 'formik-wizard-form'
import Complaints from './inprogress/complaints/complaints'
import Assessment from './inprogress/assessment/assessment'

export default function App() {
	const [finalValues, setFinalValues] = React.useState({})
	const [finished, setFinished] = React.useState(false)
	return (
		<div className="App">
			<FormikWizard
				activeStepIndex={0}
				initialValues={{
					firstName: '',
					lastName: '',
					username: '',
					password: '',
					email: '',
					phone: '',
					addressLine1: '',
					addressLine2: '',
					employerName: '',
					designation: '',
					totalExperience: '',
					city: '',
				}}
				onSubmit={(values) => {
					setFinalValues(values)
					setFinished(true)
				}}
				steps={[
					{
						component: Complaints,
					},
					{
						component: Assessment,
					},
				]}
				validateOnNext
			>
				{({
					currentStepIndex,
					renderComponent,
					handlePrev,
					handleNext,
					isNextDisabled,
					isPrevDisabled,
				}) => (
					<>
						<Box sx={{ width: '100%', my: '1rem' }}>
							<Stepper activeStep={currentStepIndex}>
								<Step completed={currentStepIndex > 0}>
									<StepLabel>Complaints</StepLabel>
								</Step>
								<Step completed={currentStepIndex > 1}>
									<StepLabel>Assessments</StepLabel>
								</Step>
							</Stepper>
						</Box>
						<Box my="2rem">{renderComponent()}</Box>
						<Box display="flex" justifyContent="space-between">
							<Button
								disabled={isPrevDisabled}
								onClick={handlePrev}
								type="primary"
								variant="contained"
							>
								Previous
							</Button>
							<Button
								disabled={isNextDisabled}
								onClick={handleNext}
								type="primary"
								variant="contained"
							>
								{currentStepIndex === 2 ? 'Finish' : 'Next'}
							</Button>
						</Box>
						<Box>
							<pre>{JSON.stringify(finalValues, null, 2)}</pre>
						</Box>
					</>
				)}
			</FormikWizard>
		</div>
	)
}
