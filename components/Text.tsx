import { textStyles, TTextStyleKey } from "@/assets/styles/textStyles"
import { FC, PropsWithChildren } from "react"
import { Text as NativeText, StyleProp, TextProps, TextStyle } from "react-native"

interface TText extends PropsWithChildren<TextProps> {
	type?: TTextStyleKey
	customStyle?: StyleProp<TextStyle>
}

const Text : FC<TText> = ({ type = "body_regular", customStyle, children, ...rest }) => {
	return (
		<NativeText style={[textStyles[type], customStyle]} {...rest}>
            {children}
		</NativeText>
	)
}

export default Text