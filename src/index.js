import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Header />
		<main className='main'>
			<Info />
			<Main />
		</main>
		<Footer />
	</React.StrictMode>
)
