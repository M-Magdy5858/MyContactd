import colors from "./colors";

export const textStyles = {
    sub_text: {
        fontFamily: "Gellix-Light",
        fontSize: 12,
        lineHeight: 16,
    },
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
        fontSize: 18,
        lineHeight: 22,
        color: colors.black,
    },
    header:{
        fontFamily: "Gellix-Bold",
        fontSize: 24,
        lineHeight: 28,
        color: colors.black,
    }
}

export type TTextStyleKey = keyof typeof textStyles;