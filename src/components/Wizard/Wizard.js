/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
// react plugin used to create a form with multiple steps
import ReactWizard from 'react-bootstrap-wizard'

// reactstrap components
import { Col } from 'reactstrap'

// core components
import PanelHeader from './PanelHeader/PanelHeader'

function Wizard({ steps }) {
	return (
		<>
			<PanelHeader size="sm" />
			<div className="content">
				<Col className="mr-auto ml-auto" md={10} xs={12}>
					<ReactWizard
						color="blue"
						description="This information will let us know more about you."
						finishButtonClasses="btn-wd"
						headerTextCenter
						navSteps
						nextButtonClasses="btn-wd"
						previousButtonClasses="btn-wd"
						steps={steps}
						title="Build Your Profile"
						validate
					/>
				</Col>
			</div>
		</>
	)
}

export default Wizard
