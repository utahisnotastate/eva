import React from 'react'
import NavBar from '../../components/ui/NavBar/navbar'
import Card from '../../components/ui/Card/Card'
import CardHeader from '../../components/ui/Card/CardHeader'
import CardBody from '../../components/ui/Card/CardBody'

export default function Home() {
	return (
		<div style={{ width: '50%', margin: 'auto' }}>
			<Card>
				<CardHeader color="primary">
					<h1>Welcome to the Home Page</h1>
				</CardHeader>
				<CardBody>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
						nunc eget nunc efficitur efficitur. Pellentesque habitant morbi
						tristique senectus et netus et malesuada fames ac turpis egestas.
					</p>
				</CardBody>
			</Card>
		</div>
	)
}
