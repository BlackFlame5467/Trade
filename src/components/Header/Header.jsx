import React from 'react'
import style from './Header.module.scss'
import Select from '../UI/Select/Select'
import Link from '../UI/Link/Link'
import Vertical from '../UI/Vertical/Vertical'

const Header = () => {
	const headerLinks = [
		{
			id: 1,
			key: 1,
			name: 'Trade',
			link: '#',
			isActive: true,
			class: false
		},
		{
			id: 2,
			key: 2,
			name: 'Portfolio',
			link: '#',
			isActive: false,
			class: false
		},
		{
			id: 3,
			key: 3,
			name: 'Markets',
			link: '#',
			isActive: false,
			class: false
		},
		{
			id: 4,
			key: 4,
			name: 'DYDX',
			link: '#',
			isActive: false,
			class: 'link__dot'
		}
	]

	return (
		<header className={style.header}>
			<nav className={style.header__nav}>
				<a href='#' className={style.header__logo}>
					<svg
						width='135'
						height='145'
						viewBox='0 0 135 145'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100.986 0L0 144.988H31.0048L132.514 0H100.986Z'
							fill='#FFFFFF'
						></path>
						<path
							d='M34.2346 0L63.9475 42.7232L48.4451 66.0268L2.58386 0H34.2346Z'
							fill='url(#paint0_linear)'
						></path>
						<path
							d='M103.995 145L71.0526 97.7455L86.555 75.0893L135 145H103.995Z'
							fill='url(#paint1_linear)'
						></path>
						<defs>
							<linearGradient
								id='paint0_linear'
								x1='27.1293'
								y1='9.0625'
								x2='69.773'
								y2='60.4324'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FFFFFF'></stop>
								<stop
									offset='1'
									stop-color='#FFFFFF'
									stop-opacity='0.55'
								></stop>
							</linearGradient>
							<linearGradient
								id='paint1_linear'
								x1='111.1'
								y1='133.996'
								x2='58.6959'
								y2='63.4999'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#6966FF'></stop>
								<stop
									offset='1'
									stop-color='#6966FF'
									stop-opacity='0.36'
								></stop>
							</linearGradient>
						</defs>
					</svg>
				</a>
				<Vertical />
				<div className={style.header__selects}>
					<Select selectText={'v4'} selectTextClass={'select__version'} />
					<Vertical />
					<Select selectText={'English'} />
					<Vertical />
				</div>
				<ul className={style.header__list}>
					{headerLinks.map(link => (
						<li>
							<Link
								linkText={link.name}
								linkActive={link.isActive}
								linkKey={link.key}
								linkHref={link.link}
								linkClass={link.class}
							/>
						</li>
					))}
					<Select selectText={'More'} selectClass={'select__small'} />
				</ul>
			</nav>
			<div className={style.header__assist}>
				<button className={`${style.header__help} ${style.header__btn}`}>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						class='sc-17s7t24-0 eMyZgc'
					>
						<rect
							x='0.5'
							y='0.5'
							width='15'
							height='15'
							rx='7.5'
							stroke='#6e6d84'
						></rect>
						<path
							d='M8.05814 12C8.52326 12 8.81395 11.6643 8.81395 11.2727C8.81395 10.8811 8.52326 10.5455 8.05814 10.5455C7.59302 10.5455 7.30233 10.8811 7.30233 11.2727C7.30233 11.6643 7.59302 12 8.05814 12ZM7.4186 9.09091C7.4186 9.36898 7.64403 9.59441 7.9221 9.59441H8.0779C8.35597 9.59441 8.5814 9.36898 8.5814 9.09091C8.5814 7.8042 10.5 7.86014 10.5 6.06993C10.5 4.78322 9.45349 4 8 4C6.88596 4 6.01403 4.54361 5.65318 5.53378C5.53189 5.86659 5.81281 6.18182 6.16703 6.18182C6.45355 6.18182 6.68586 5.9675 6.81593 5.71221C7.03159 5.28895 7.4344 5.00699 8 5.00699C8.81395 5.00699 9.27907 5.45455 9.27907 6.06993C9.27907 7.41259 7.4186 7.18881 7.4186 9.09091Z'
							fill='#6e6d84'
						></path>
					</svg>
				</button>
				<Vertical />
				<button
					className={`${style.header__notification} ${style.header__btn}`}
				>
					<svg
						width='16'
						height='18'
						viewBox='0 0 16 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						class='sc-17s7t24-0 eMyZgc'
					>
						<path
							d='M10.3811 13.235C11.9338 13.0512 13.4593 12.6847 14.9261 12.1433C13.6839 10.7673 12.9975 8.97875 13.0003 7.125V6.54167V6.5C13.0003 5.17392 12.4735 3.90215 11.5358 2.96447C10.5981 2.02678 9.32636 1.5 8.00028 1.5C6.67419 1.5 5.40242 2.02678 4.46474 2.96447C3.52706 3.90215 3.00028 5.17392 3.00028 6.5V7.125C3.00279 8.97886 2.3161 10.7675 1.07361 12.1433C2.51778 12.6767 4.04027 13.0475 5.61944 13.235M10.3811 13.235C8.79943 13.4226 7.20112 13.4226 5.61944 13.235M10.3811 13.235C10.5012 13.6099 10.5311 14.0078 10.4683 14.3964C10.4055 14.785 10.2518 15.1533 10.0198 15.4713C9.78772 15.7893 9.48386 16.048 9.13293 16.2263C8.78201 16.4047 8.39392 16.4976 8.00028 16.4976C7.60663 16.4976 7.21854 16.4047 6.86762 16.2263C6.51669 16.048 6.21283 15.7893 5.98079 15.4713C5.74875 15.1533 5.59508 14.785 5.53229 14.3964C5.46949 14.0078 5.49936 13.6099 5.61944 13.235'
							stroke='#6e6d84'
							stroke-width='1.25'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>
					</svg>
				</button>
				<Vertical />
				<button className={style.header__wallet}>Connect wallet</button>
			</div>
		</header>
	)
}

export default Header
