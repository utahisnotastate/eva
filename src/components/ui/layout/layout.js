import React from 'react'
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import NavBar from '../NavBar/navbar'
import './layout.css'
import { Breadcrumb, Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout
const navlinks = [
	{ label: 'item 1', key: 'item-1' },
	{ label: 'item 2', key: 'item-2' },
]
// <Menu items={props.navlinks} mode="horizontal" theme="dark" />
export default function EVALayout(props) {
	return (
		<Layout className="layout">
			<Header>
				<NavBar />
			</Header>
			<Content
				style={{
					padding: '0 50px',
					margin: '16px 0',
				}}
			>
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
