import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import { ModalProvider } from 'react-modal-hook'
import EVALayout from './components/ui/layout/layout'
import App from './App'
//import Eva from './Eva'
import { Provider } from 'react-redux'
import store from './redux/store'

const theme = createTheme({
	palette: {
		primary: {
			main: blue[500],
		},
	},
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<ModalProvider>
		<App />
	</ModalProvider>,
)
/*
root.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
)

<Eva />
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Eva />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)*/

/*
<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Eva />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
