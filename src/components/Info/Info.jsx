import React from 'react'
import style from './Info.module.scss'

import eth from '../../img/eth.png'
import Select from '../UI/Select/Select'
import Vertical from '../UI/Vertical/Vertical'

const Info = () => {
	return (
		<header className={style.info__header}>
			<div className={style.info__coin}>
				<div className={style.info__coinName}>
					<img src={eth} alt='eth' />
					<h2>ETH-USD</h2>
				</div>
				<Select
					selectText={'All markets'}
					selectClass={'select__info'}
					selectDisableHover={true}
					selectTextClass={'select__infoText'}
				/>
			</div>
			<Vertical />
			<div className={style.info__details}>
				<h2 className={style.info__price}>$10000</h2>
				<Vertical />
				<div className={`${style.info__oracle} ${style.info__block}`}>
					<p className={style.info__title}>Oracle Price</p>
					<p className={style.info__count}>$3000</p>
				</div>
				<Vertical />
				<div className={`${style.info__change} ${style.info__block}`}>
					<p className={style.info__title}>24h Change</p>
					<p className={style.info__count}>$100(10%)</p>
				</div>
				<Vertical />
				<div className={`${style.info__interest} ${style.info__block}`}>
					<p className={style.info__title}>Open Interest</p>
					<p className={style.info__count}>14,001.50</p>
				</div>
				<Vertical />
				<div className={`${style.info__funding} ${style.info__block}`}>
					<p className={style.info__title}>1h Funding</p>
					<p className={style.info__count}>0.0000004242%</p>
				</div>
				<Vertical />
				<div className={`${style.info__volume} ${style.info__block}`}>
					<p className={style.info__title}>24h Volume</p>
					<p className={style.info__count}>$400,000.200</p>
				</div>
				<Vertical />
				<div className={`${style.info__trades} ${style.info__block}`}>
					<p className={style.info__title}>24h Trades</p>
					<p className={style.info__count}>130,000</p>
				</div>
				<Vertical />
				<div className={`${style.info__nextFunding} ${style.info__block}`}>
					<p className={style.info__title}>Next Funding</p>
					<p className={style.info__count}>10:00</p>
				</div>
			</div>
		</header>
	)
}

export default Info
