import { motion } from "framer-motion";
import { Box, Text } from "../index";

// An utility display for component
export function Display({ label, css, ...rest }: any) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			style={{
				marginTop: "2em",
				marginBottom: "2em",
			}}
		>
			<Text css={{ mb: "$2" }} size="overline" color="slate10">
				{label}
			</Text>
			<Box
				css={{
					borderWidth: 1,
					p: "$6",
					overflow: "hidden",
					borderColor: "$slate6",
					borderRadius: "$xl",
					...css,
				}}
				{...rest}
			/>
		</motion.div>
	);
}
