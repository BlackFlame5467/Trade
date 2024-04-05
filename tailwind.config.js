/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				colorWhite: '#FAFAFD',
				colorMain: '#6E6D84',
				colorRed: '#D86058',
				colorGreen: '#65D5A3',
				colorPurple: '#7573FE',
				colorAccent: '#C8C7D8',
				bgHover: '#2D2D43',
				bgMain: '#181825',
				bgAccent: '#12121A',
				bgLight: '#29293A',
				bgActive: '#101018',
				bgLine: '#303045',
				bgPurple: '#7370FF',
				borderPurple: '#9492FF',
				borderGreen: '#65D5A3'
			}
		}
	},
	plugins: []
}
