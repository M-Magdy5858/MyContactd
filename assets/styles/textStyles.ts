import colors from "./colors";

export const textStyles = {
    body_light:{
        fontFamily: "Gellix-Light",
        fontSize: 14,
        lineHeight: 18,
        color: colors.black,
    },
    body_regular: {
        fontFamily: "Gellix-Regular",
        fontSize: 14,
        lineHeight: 18,
        color: colors.black,
    },
    body_medium: {
        fontFamily: "Gellix-Medium",
        fontSize: 14,
        lineHeight: 18,
        color: colors.black,
    },
    body_bold: {
        fontFamily: "Gellix-Bold",
        fontSize: 14,
        lineHeight: 18,
        color: colors.black,
    },
    title_medium: {
        fontFamily: "Gellix-Medium",
        fontSize: 16,
        lineHeight: 20,
        color: colors.black,
    },
}

export type TTextStyleKey = keyof typeof textStyles;