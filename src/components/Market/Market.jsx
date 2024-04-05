import React from 'react'
import Button from '../UI/Button/Button'
import InputForm from '../UI/InputForm/InputForm'
import Select from '../UI/Select/Select'
import style from './Market.module.scss'

const Market = () => {
	const marketBtns = [
		{
			id: 1,
			name: 'Limit',
			isActive: true
		},
		{
			id: 2,
			name: 'Market',
			isActive: false
		}
	]

	return (
		<section className={style.market}>
			<div className={style.market__wallet}>
				<h2 className={style.market__title}>
					Connect your Ethereum wallet to deposit funds & start trading.
				</h2>
				<button className={style.market__btn}>Connect wallet</button>
			</div>
			<nav className={style.market__nav}>
				{marketBtns.map(btn => (
					<Button
						buttonText={btn.name}
						buttonActive={btn.isActive}
						buttonClass={'button__big'}
					/>
				))}
				<Select
					selectText={'Stop'}
					selectClass={'select__small'}
					selectDisableHover={true}
				/>
			</nav>
			<div className={style.market__wrapper}>
				<div className={style.market__main}>
					<div className={style.market__block}>
						<button
							className={`${style.market__activeGreen} ${style.market__changeBtn}`}
						>
							Buy
						</button>
						<button className={style.market__changeBtn}>Sell</button>
					</div>
					<InputForm
						inputTitle={'Limit Price'}
						inputPlaceholder={'$0.0'}
						inputCurrency={'USD'}
					/>
					<div className={style.market__container}>
						<InputForm
							inputTitle={'Amount'}
							inputPlaceholder={'0.000'}
							inputCurrency={'ETH'}
						/>
						<InputForm
							inputTitle={'Amount'}
							inputPlaceholder={'$0.0'}
							inputCurrency={'USD'}
						/>
					</div>
					<button className={style.market__advanced}>
						<span className={style.market__text}>Advanced</span>
						<div className={style.market__line}></div>
						<span>
							<svg
								fill='none'
								height='10'
								viewBox='0 0 15 10'
								width='15'
								xmlns='http://www.w3.org/2000/svg'
								class='sc-17s7t24-0 eMyZgc'
							>
								<path
									clip-rule='evenodd'
									d='m.321829 1.09389c.200562-.192959.469529-.298401.747791-.29315.27827.00525.54307.120763.73621.32115l5.194 5.5132 5.19397-5.5132c.0944-.10408.2088-.188152.3363-.247234.1275-.059081.2655-.091968.406-.096713.1404-.004746.2804.018748.4116.069088s.2509.126504.3522.223979c.1012.09747.1818.21427.2371.34347.0552.12921.084.26819.0845.40871.0006.14052-.0271.27972-.0813.40936s-.1339.24707-.2344.34534l-5.94997 6.3c-.09795.10163-.21538.18245-.34527.23766-.1299.05521-.26959.08367-.41073.08367s-.28083-.02846-.41073-.08367c-.12989-.05521-.24732-.13603-.34527-.23766l-5.950001-6.3c-.192962-.20056-.29840394-.46953-.29315364-.74779.00525031-.27827.12076264-.54307.32115364-.73621z'
									fill='#6E6D84'
									fill-rule='evenodd'
								></path>
							</svg>
						</span>
					</button>
				</div>
				<footer className={style.market__footer}>
					<div className={style.market__footerContainer}>
						<div className={style.market__item}>
							<p className={style.market__text}>Expected Price</p>
							<span>-</span>
						</div>
						<div className={style.market__item}>
							<p className={style.market__text}>Fee</p>
							<span>-</span>
						</div>
						<div className={style.market__item}>
							<p className={style.market__text}>Estimated Rewards</p>
							<span>-</span>
						</div>
						<div className={style.market__item}>
							<p className={style.market__text}>Total</p>
							<span>-</span>
						</div>
					</div>
					<button className={style.market__footerBtn}>Connect wallet</button>
				</footer>
			</div>
		</section>
	)
}

export default Market
