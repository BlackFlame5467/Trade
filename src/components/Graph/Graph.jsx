import React from 'react'
import style from './Graph.module.scss'
import Button from '../UI/Button/Button'
import Orders from '../Orders/Orders'
import Chart from '../Chart/Chart'

const Graph = () => {
	const graphBtns = [
		{
			id: 1,
			name: 'Price',
			isActive: true
		},
		{
			id: 2,
			name: 'Depth',
			isActive: false
		},
		{
			id: 3,
			name: 'Funding',
			isActive: false
		},
		{
			id: 4,
			name: 'Details',
			isActive: false
		}
	]

	return (
		<section className={style.graph}>
			<header className={style.graph__header}>
				<nav className={style.graph__nav}>
					{graphBtns.map(btn => (
						<Button buttonText={btn.name} buttonActive={btn.isActive} />
					))}
				</nav>
				<div className={style.graph__wrapper}>
					<a href='#' className={style.graph__link}>
						<svg
							width='14'
							height='14'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							class='sc-17s7t24-0 eMyZgc'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M13.7647 9.5219C13.4886 9.69388 13.1634 9.71519 12.9162 9.57783C12.6023 9.40319 12.4296 8.99417 12.4296 8.42534V6.72341C12.4296 5.90156 12.0998 5.31675 11.5483 5.15885C10.6137 4.8906 9.91086 6.01723 9.6467 6.44033L7.99841 9.07331V5.85514C7.97988 5.11471 7.7358 4.67182 7.27236 4.53827C6.96572 4.45 6.50692 4.48539 6.06125 5.15733L2.36844 10.9993C1.87407 10.0747 1.61635 9.04504 1.61768 7.99995C1.61768 4.48082 4.48017 1.61803 7.99841 1.61803C11.5167 1.61803 14.3788 4.48082 14.3788 7.99995C14.3788 8.00604 14.3803 8.01137 14.3807 8.01707C14.3807 8.02316 14.3795 8.02849 14.3799 8.03458C14.4131 8.71603 14.1891 9.25784 13.7647 9.5219ZM15.7965 8.00033V7.98245L15.7961 7.96495C15.7764 3.67913 12.2864 0.199951 7.99803 0.199951C3.6985 0.199951 0.199951 3.69892 0.199951 7.99995C0.199951 12.3006 3.6985 15.8 7.99841 15.8C9.97149 15.8 11.8546 15.061 13.3001 13.7198C13.5874 13.4535 13.6044 13.0049 13.338 12.718C13.2752 12.6499 13.1994 12.5947 13.1147 12.5559C13.0301 12.517 12.9385 12.4951 12.8452 12.4916C12.7519 12.488 12.6588 12.5029 12.5714 12.5352C12.484 12.5676 12.404 12.6168 12.3362 12.68C11.1645 13.7731 9.6121 14.3822 7.99841 14.3819C6.11455 14.3819 4.41953 13.5604 3.25052 12.2576L6.58069 6.98938V9.41803C6.58069 10.5846 7.03987 10.9617 7.42491 11.072C7.81034 11.1824 8.39929 11.107 9.01759 10.1177L10.8493 7.19218C10.908 7.09782 10.9621 7.01639 11.0115 6.946V8.42534C11.0115 9.51581 11.4549 10.3879 12.2277 10.8175C12.9243 11.2048 13.8002 11.1698 14.5139 10.7261C15.379 10.1878 15.8452 9.19582 15.7965 8.00033Z'
								fill='#C8C7D8'
							></path>
						</svg>
					</a>
					<a href='#' className={style.graph__link}>
						<svg
							width='14'
							height='14'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							class='sc-17s7t24-0 eMyZgc'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2 2.48333C2 1.9971 2.21071 1.53078 2.58579 1.18696C2.96086 0.843148 3.46957 0.649994 4 0.649994H8.586C9.11639 0.650098 9.62501 0.84332 10 1.18716L13.414 4.31666C13.7891 4.6604 13.9999 5.12664 14 5.61283V13.4833C14 13.9696 13.7893 14.4359 13.4142 14.7797C13.0391 15.1235 12.5304 15.3167 12 15.3167H4C3.46957 15.3167 2.96086 15.1235 2.58579 14.7797C2.21071 14.4359 2 13.9696 2 13.4833V2.48333ZM4 7.98333C4 7.74021 4.10536 7.50706 4.29289 7.33515C4.48043 7.16324 4.73478 7.06666 5 7.06666H11C11.2652 7.06666 11.5196 7.16324 11.7071 7.33515C11.8946 7.50706 12 7.74021 12 7.98333C12 8.22644 11.8946 8.4596 11.7071 8.63151C11.5196 8.80342 11.2652 8.89999 11 8.89999H5C4.73478 8.89999 4.48043 8.80342 4.29289 8.63151C4.10536 8.4596 4 8.22644 4 7.98333ZM5 10.7333C4.73478 10.7333 4.48043 10.8299 4.29289 11.0018C4.10536 11.1737 4 11.4069 4 11.65C4 11.8931 4.10536 12.1263 4.29289 12.2982C4.48043 12.4701 4.73478 12.5667 5 12.5667H11C11.2652 12.5667 11.5196 12.4701 11.7071 12.2982C11.8946 12.1263 12 11.8931 12 11.65C12 11.4069 11.8946 11.1737 11.7071 11.0018C11.5196 10.8299 11.2652 10.7333 11 10.7333H5Z'
								fill='#C8C7D8'
							></path>
						</svg>
					</a>
					<a href='#' className={style.graph__link}>
						<svg
							width='18'
							height='18'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							class='sc-17s7t24-0 eMyZgc'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M9.99995 17.8C12.0686 17.8 14.0526 16.9782 15.5154 15.5154C16.9782 14.0526 17.8 12.0686 17.8 9.99995C17.8 7.93126 16.9782 5.9473 15.5154 4.48452C14.0526 3.02173 12.0686 2.19995 9.99995 2.19995C7.93126 2.19995 5.9473 3.02173 4.48452 4.48452C3.02173 5.9473 2.19995 7.93126 2.19995 9.99995C2.19995 12.0686 3.02173 14.0526 4.48452 15.5154C5.9473 16.9782 7.93126 17.8 9.99995 17.8ZM4.47365 8.07628C4.83566 7.03957 5.48159 6.1254 6.33785 5.43793C6.59915 5.8367 7.0496 6.09995 7.56245 6.09995C7.95033 6.09995 8.32232 6.25404 8.5966 6.52831C8.87087 6.80258 9.02495 7.17457 9.02495 7.56245V8.04995C9.02495 8.56712 9.2304 9.06311 9.59609 9.42881C9.96179 9.79451 10.4578 9.99995 10.975 9.99995C11.4921 9.99995 11.9881 9.79451 12.3538 9.42881C12.7195 9.06311 12.925 8.56712 12.925 8.04995C12.9248 7.61356 13.071 7.18974 13.3402 6.84628C13.6094 6.50283 13.9861 6.25961 14.4099 6.15553C15.3403 7.2199 15.8521 8.58622 15.85 9.99995C15.85 10.3315 15.8227 10.6581 15.769 10.975H14.875C14.3578 10.975 13.8618 11.1804 13.4961 11.5461C13.1304 11.9118 12.925 12.4078 12.925 12.925V15.067C12.036 15.5813 11.0269 15.8514 9.99995 15.85V13.9C9.99995 13.3828 9.79451 12.8868 9.42881 12.5211C9.06311 12.1554 8.56712 11.95 8.04995 11.95C7.53278 11.95 7.03679 11.7445 6.67109 11.3788C6.3054 11.0131 6.09995 10.5171 6.09995 9.99995C6.10012 9.53878 5.93684 9.09246 5.6391 8.74028C5.34136 8.38809 4.92843 8.15283 4.47365 8.07628Z'
								fill='#C8C7D8'
							></path>
						</svg>
					</a>
				</div>
			</header>
			<Chart />
			<Orders />
		</section>
	)
}

export default Graph
