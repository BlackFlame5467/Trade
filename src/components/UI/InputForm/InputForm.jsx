import React from 'react'
import style from './InputForm.module.scss'

const InputForm = ({ inputTitle, inputCurrency, inputPlaceholder }) => {
	return (
		<div className={style.input}>
			<div className={style.input__info}>
				<h2 className={style.input__title}>{inputTitle}</h2>
				<span className={style.input__currency}>{inputCurrency}</span>
			</div>
			<input
				type='text'
				className={style.input__input}
				placeholder={inputPlaceholder}
			/>
		</div>
	)
}

export default InputForm
