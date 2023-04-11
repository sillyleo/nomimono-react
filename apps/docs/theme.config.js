// Nextra config

import { motion } from "framer-motion";
import "@sayaww/nomi-mono/style";

const logoStyle = {
	height: "100%",
	position: "absolute",
	top: 0,
	left: 30,
	display: "flex",
	alignItems: "center",
};

const logoMotion = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.5, delay: 0.5 },
	},
};

const enLogoMotion = {
	initial: { opacity: 1, y: 0 },
	hover: { opacity: 0, y: -20 },
};

const jpLogoMotion = {
	initial: { opacity: 0, y: 20 },
	hover: { opacity: 1, y: 0 },
};

export default {
	logo: (
		<motion.div
			className={"font-heading"}
			layout
			animate="animate"
			initial="initial"
			whileHover="hover"
			variants={logoMotion}
			style={{
				position: "relative",
				gap: "0.25em",
				fontSize: "1.4em",
				display: "flex",
				alignItems: "center",
			}}
		>
			<motion.span>🥤</motion.span>
			<motion.div
				// a placeholder for logo width
				style={{ opacity: 0 }}
			>
				Nomimono
			</motion.div>
			<motion.div
				style={logoStyle}
				variants={enLogoMotion}

				// initial={{ y: 0 }}
				// animate={{ y: -40 }}
			>
				Nomimono
			</motion.div>
			<motion.div
				variants={jpLogoMotion}
				style={logoStyle}

				// initial={{ y: 40 }}
				// animate={{ y: 0 }}
			>
				<span css={{ fontSize: "0.98em" }}>のみもの</span>
			</motion.div>
		</motion.div>
	),
	docsRepositoryBase: "https://github.com/sillyleo/nomimono-react",
	primaryHue: 27,
	project: {
		link: "https://github.com/sillyleo/nomimono-react",
	},
	faviconGlyph: "🥤",
	head: (
		<>
			<title>Nomimono</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				property="og:description"
				content="A simple web3-flavored component library"
			/>
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
		</>
	),
	footer: {
		text: (
			<span>
				MIT {new Date().getFullYear()} ©{" "}
				<a href="https://twitter.com/LeoLin12982377" target="_blank">
					Leo Lin
				</a>
				.
			</span>
		),
	},
	// ...
};
