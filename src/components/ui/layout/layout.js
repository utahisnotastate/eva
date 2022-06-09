import React from 'react'
import './layout.css'
import { Breadcrumb, Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout
const navlinks = [
	{ label: 'item 1', key: 'item-1' },
	{ label: 'item 2', key: 'item-2' },
]

export default function EVALayout(props) {
	return (
		<Layout className="layout">
			<Header>
				<Menu
					defaultSelectedKeys={['2']}
					items={props.navlinks}
					mode="horizontal"
					theme="dark"
				/>
			</Header>
			<Content
				style={{
					padding: '0 50px',
				}}
			>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-content">{props.children}</div>
			</Content>
			<Footer
				style={{
					textAlign: 'center',
				}}
			>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	)
}
