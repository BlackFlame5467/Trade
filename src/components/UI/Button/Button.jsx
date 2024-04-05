import React from 'react'
import style from './Button.module.scss'

const Button = ({ buttonText, buttonActive, buttonClass }) => {
	return (
		<button
			className={`${style.button} ${buttonActive ? style.button__active : ''} ${
				buttonClass ? style[buttonClass] : ''
			}`}
		>
			{buttonText}
		</button>
	)
}

export default Button
