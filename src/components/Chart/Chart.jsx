import React, { memo, useEffect, useRef } from 'react'
import './Chart.module.scss'

function TradingViewWidget() {
	const container = useRef()

	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
		script.type = 'text/javascript'
		script.async = true
		script.innerHTML = `
			{
				"width": "1550",
				"height": "450",
				"symbol": "BINANCE:ETHUSD",
				"interval": "5",
				"timezone": "Etc/UTC",
				"theme": "dark",
				"style": "1",
				"locale": "en",
				"enable_publishing": false,
				"allow_symbol_change": true,
				"calendar": false,
				"support_host": "https://www.tradingview.com"
		}`
		script.onload = () => {
			const iframes = container.current.querySelectorAll('iframe')
			if (iframes.length > 0) {
				iframes[0].onload = () => {
					console.log('Данные загружены в iframe')
					const frame = iframes[0]
					console.log(frame)
					console.log(frame.contentWindow.document.body)
				}
			}
		}
		return async () => {
			container.current.appendChild(script)
		}
	}, [])
	return (
		<div className='chart__container'>
			<div
				className='tradingview-widget-container'
				ref={container}
				style={{ height: '450px', width: '100%' }}
			>
				<div
					className='tradingview-widget-container__widget'
					style={{ height: '420px', width: '100%' }}
				></div>
			</div>
		</div>
	)
}

export default memo(TradingViewWidget)
