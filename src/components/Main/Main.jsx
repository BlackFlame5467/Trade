import React from 'react'
import style from './Main.module.scss'
import Graph from '../Graph/Graph'
import Market from '../Market/Market'

const Main = () => {
	return (
		<section className={style.main}>
			<Graph />
			<Market />
		</section>
	)
}

export default Main
