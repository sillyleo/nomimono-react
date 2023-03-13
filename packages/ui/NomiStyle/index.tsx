// this is a typography wrapper for article-like content from CMS

import { styled, css } from "../stitches.config";

const nomiObject = {
	fontSize: "$base",
	fontFamily: "$body",
	lineHeight: "$body",
	webkitFontSmoothing: "antialiased",
	"& h1": {
		fontFamily: "$heading",
		fontWeight: "$bold",
		fontSize: "$2xl",
		lineHeight: "$heading",
		letterSpacing: "$decreased",
	},
	"& h2": {
		fontFamily: "$heading",

		fontWeight: "$bold",
		fontSize: "$xl",
		lineHeight: "$heading",
		letterSpacing: "$decreased",
	},
	"& h3": {
		fontFamily: "$heading",

		fontWeight: "$bold",
		fontSize: "$lg",
		lineHeight: "$heading",
		letterSpacing: "$decreased",
	},
	"& h4": {
		fontFamily: "$heading",

		fontWeight: "$bold",
		fontSize: "$base",
		lineHeight: "$heading",
		letterSpacing: "$decreased",
	},

	"& > *": {
		marginBottom: "$6",
	},
	"& > *:last-child": {
		marginBottom: 0,
	},
	"& a": {
		color: "$grass9",
	},
	"& a:hover": {
		color: "$grass11",
	},
	"& ul,& ol": {
		paddingLeft: "$4",
	},
	"& li": {
		marginBottom: "$2",
	},
	"& img": {
		maxWidth: "100%",
		height: "auto",
	},
};

/**
 * Usage:
 * <NomiStyle>
 *  <h1>...</h1>
 *  <p>...</p>
 * </NomiStyle>
 */
const NomiStyle = styled("div", nomiObject);

/**
 * Usage:
 * <div className={nomiClass}>
 *	<h1>...</h1>
 *	<p>...</p>
 * </div>
 */
export const nomiClass = css(nomiObject);

export default NomiStyle;
