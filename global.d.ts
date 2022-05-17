declare module 'classnames-react-native' {
	type StyleInput = StyleProp | [StyleProp, boolean]
	export default function cn(...data: StyleInput[]): StyleProp
}
