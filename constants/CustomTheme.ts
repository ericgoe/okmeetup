import { Theme } from '@react-navigation/native'
import Colors from './Colors'

const CustomTheme: Theme = {
	colors: {
		border: 'rgb(39, 39, 41)',
		card: 'rgb(18, 18, 18)',
		notification: 'rgb(255, 69, 58)',
		primary: Colors.primary,
		text: Colors.text,
		background: Colors.background,
	},
	dark: true,
}

export default CustomTheme
