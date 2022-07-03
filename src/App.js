import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import { Provider } from 'react-redux'
import store from './redux/store'
import Eva from './Eva'
import './App.css'

const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
		},
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Eva />
			</Provider>
		</ThemeProvider>
	)
}
