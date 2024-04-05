import React from 'react'
import style from './Link.module.scss'

const Link = ({ linkText, linkHref, linkKey, linkActive, linkClass }) => {
	return (
		<a
			href={linkHref}
			key={linkKey}
			className={`${style.link} ${linkActive ? style.link__active : ''}`}
		>
			{linkText}
			{linkClass ? <div className={style[linkClass]}></div> : ''}
		</a>
	)
}

export default Link
