import { textStyles, TTextStyleKey } from "@/assets/styles/textStyles"
import { FC, PropsWithChildren } from "react"
import { StyleProp, Text, TextProps, TextStyle } from "react-native"

interface TBaseText extends PropsWithChildren<TextProps> {
	type?: TTextStyleKey
	customStyle?: StyleProp<TextStyle>
}

const BaseText : FC<TBaseText> = ({ type = "body_regular", customStyle, children, ...rest }) => {
	return (
		<Text style={[textStyles[type], customStyle]} {...rest}>
            {children}
		</Text>
	)
}

export default BaseText