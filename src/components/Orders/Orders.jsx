import React from 'react'
import Button from '../UI/Button/Button'
import style from './Orders.module.scss'

import eth from '../../img/eth.png'

const Orders = () => {
	const ordersBtns = [
		{
			id: 1,
			name: 'Position',
			isActive: true
		},
		{
			id: 2,
			name: 'Orders',
			isActive: false
		},
		{
			id: 3,
			name: 'Fills',
			isActive: false
		}
	]

	return (
		<section className={style.orders}>
			<header className={style.orders__header}>
				<nav className={style.orders__nav}>
					{ordersBtns.map(btn => (
						<Button buttonText={btn.name} buttonActive={btn.isActive} />
					))}
				</nav>
				<div className={style.orders__wrapper}>
					<a href='#' className={style.orders__link}>
						All
					</a>
					<a href='#' className={style.orders__coin}>
						<img src={eth} className={style.orders__coinImg}></img>
						<span className={style.orders__coinName}>ETH</span>
					</a>
					<a href='#' className={style.orders__link}>
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
								fill='#6e6d84'
								fill-rule='evenodd'
							></path>
						</svg>
					</a>
				</div>
			</header>
			<div className={style.orders__position}>
				<div className={style.orders__info}>
					<div className={style.orders__container}>
						<div>
							<p className={style.orders__containerName}>None</p>
						</div>
					</div>
					<div className={style.orders__infoContainer}>
						<div className={style.orders__infoWrapper}>
							<div className={style.orders__wrapperBlock}>
								<h2 className={style.orders__title}>Leverage</h2>
								<span className={style.orders__count}>-</span>
							</div>
							<div className={style.orders__wrapperBlock}>
								<h2 className={style.orders__title}>Unrealized P&L</h2>
								<span className={style.orders__count}>-</span>
							</div>
						</div>
						<div className={style.orders__infoWrapper}>
							<div className={style.orders__wrapperBlock}>
								<h2 className={style.orders__title}>Liquidation Price</h2>
								<span className={style.orders__count}>-</span>
							</div>
							<div className={style.orders__wrapperBlock}>
								<h2 className={style.orders__title}>Realized P&L</h2>
								<span className={style.orders__count}>-</span>
							</div>
						</div>
					</div>
				</div>
				<div className={style.orders__details}>
					<div className={style.orders__detailsBlock}>
						<h2 className={style.orders__name}>Average Open</h2>
						<span className={style.orders__count}>-</span>
					</div>
					<div className={style.orders__detailsBlock}>
						<h2 className={style.orders__name}>Average Close</h2>
						<span className={style.orders__count}>-</span>
					</div>
					<div className={style.orders__detailsBlock}>
						<h2 className={style.orders__title}>Net Funding</h2>
						<span className={style.orders__count}>-</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Orders
