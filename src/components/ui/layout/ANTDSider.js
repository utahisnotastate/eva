import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'
const { Header, Content, Footer, Sider } = Layout
const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}))
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
		const key = String(index + 1)
		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`,
			children: new Array(4).fill(null).map((_, j) => {
				const subKey = index * 4 + j + 1
				return {
					key: subKey,
					label: `option${subKey}`,
				}
			}),
		}
	},
)

export default function ANTDSider() {
	return (
		<Layout>
			<Content
				style={{
					padding: '0 50px',
				}}
			>
				<Layout
					className="site-layout-background"
					style={{
						padding: '24px 0',
					}}
				>
					<Sider className="site-layout-background" width={200}>
						<Menu
							defaultOpenKeys={['sub1']}
							defaultSelectedKeys={['1']}
							items={items2}
							mode="inline"
							style={{
								height: '100%',
							}}
						/>
					</Sider>
					<Content
						style={{
							padding: '0 24px',
							minHeight: 280,
						}}
					>
						Content
					</Content>
				</Layout>
			</Content>
		</Layout>
	)
}

export default App
