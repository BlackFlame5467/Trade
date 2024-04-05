import React, { useEffect, useRef, useState } from 'react'
import { createChart } from 'lightweight-charts'

const Chart = () => {
	const chartContainerRef = useRef() // Блок графика
	// Можно делать только 800 запросов в день
	const url =
		'https://twelve-data1.p.rapidapi.com/time_series?symbol=ETH%2FUSD&interval=1day&outputsize=700&format=json' // Получаем ETH/USD, 1day, 700 обьектов

	const [chartData, setChartData] = useState([]) // Для заполнения массива данными

	useEffect(() => {
		const fetchData = async () => {
			// Получение данных
			try {
				const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key':
							'8601b70ce5mshef8601608859484p195e7djsnbcbbb559f2d4',
						'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
					}
				}

				const response = await fetch(url, options)
				const data = await response.json()

				const reversedData = data.values // Запись всех обьектов из массива
					.map(item => ({
						time: item.datetime,
						open: +item.open,
						high: +item.high,
						low: +item.low,
						close: +item.close
					}))
					.reverse()

				setChartData(reversedData) // Вписываем в пустой массив данные
			} catch (error) {
				console.error('Error fetching data:', error)
				setChartData([]) // При ошибке возвращаем пустой массив
			}
		}

		fetchData() // Первый запрос

		const intervalId = setInterval(fetchData, 60000) // Запрос каждые 60 секунд

		return () => clearInterval(intervalId) // Очистка интервала
	}, [url])

	useEffect(() => {
		if (chartData.length > 0) {
			const chart = createChart(chartContainerRef.current, {
				// Базовые настройки графика
				layout: {
					background: {
						color: '#181825'
					},
					textColor: '#DDD'
				},
				grid: {
					vertLines: {
						color: '#303045'
					},
					horzLines: {
						color: '#303045'
					}
				},
				width: chartContainerRef.current.clientWidth,
				height: 345
			})

			chart.timeScale().applyOptions({
				// Настройка шкалы времени
				rightOffset: 20,
				timeVisible: true
			})

			chart.timeScale().fitContent() // Автоматически рассчитывает видимый диапазон

			const newSeries = chart.addCandlestickSeries({
				// Настройка типа и цвета графика
				upColor: '#65D5A3',
				downColor: '#D86058',
				borderVisible: false,
				wickUpColor: '#65D5A3',
				wickDownColor: '#D86058'
			})

			newSeries.setData(chartData) // Берем данные из массива

			chart.timeScale().setVisibleLogicalRange({
				// Показываем только первые 75 элемента
				from: chartData.length - 75,
				to: chartData.length
			})

			const handleResize = () => {
				// Автоматическое уменьшение графика при уменьшении окна браузера
				chart.applyOptions({
					width: chartContainerRef.current.clientWidth
				})
			}

			window.addEventListener('resize', handleResize)

			return () => {
				chart.remove() // Удаляем лишний график
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [chartData])

	return <div ref={chartContainerRef} style={{ height: 345 + 'px' }}></div> // График
}

export default Chart
