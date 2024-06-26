import React from 'react'
import style from './Select.module.scss'

const Select = ({
	selectClass,
	selectText,
	selectTextClass,
	selectDisableHover
}) => {
	return (
		<button
			className={`${style.select} ${selectClass ? style[selectClass] : ''} ${
				selectDisableHover ? style.select__disableHover : ''
			}`}
		>
			<span
				className={`${style.select__text} ${
					selectTextClass ? style[selectTextClass] : ''
				}`}
			>
				{selectText}
			</span>
			<span className={style.select__arrow}>
				<svg
					width='1em'
					height='1em'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					class='sc-17s7t24-0 eMyZgc'
					aria-hidden='true'
				>
					<path
						d='M6.92525 14.1691C7.46819 15.0155 8.53182 15.0155 9.07476 14.1691L15.7159 3.81655C16.4025 2.74628 15.7667 1.19612 14.6412 1.19612H1.35883C0.23329 1.19612 -0.402506 2.74628 0.284066 3.81655L6.92525 14.1691Z'
						fill='#6E6D84'
					></path>
				</svg>
			</span>
		</button>
	)
}

export default Select
