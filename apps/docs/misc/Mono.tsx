import { motion } from "framer-motion";
import { Text, Box } from "nomimono";
import { useEffect, useState } from "react";

export const Mono = () => {
	// A function to cycle through the following characters: 🥃🥛🥤🍵🍶🍷🍸🍹🍺🧋🍼

	const cycleText = () => {
		const text = [
			"🥃",
			"🥛",
			"🥤",
			"🍵",
			"🍶",
			"🍷",
			"🍸",
			"🍹",
			"🍺",
			"🧋",
			"🍼",
		];
		const [index, setIndex] = useState(0);

		useEffect(() => {
			const interval = setInterval(() => {
				setIndex((index) => index + 1);
			}, 1500);
			return () => clearInterval(interval);
		}, []);

		return text[index % text.length];
	};

	return <div>{cycleText()}</div>;
};

export const Banner = () => {
	return (
		<Box
			css={{
				background: "$baseBackgroundTertiary",
				borderRadius: "$2xl",
				color: "$baseTextPrimary",
				display: "flex",
				flexWrap: "wrap",
				gap: "1.3em",
				alignItems: "center",
				justifyContent: "center",
				lineHeight: "$single",
				mt: "$3",
				px: "$8",
				py: "$12",
				position: "relative",
				zIndex: "999",
			}}
		>
			<div style={{ fontSize: "clamp(5rem, 5vw, 8rem)", lineHeight: 1.2 }}>
				<Mono />
			</div>
			<Box
				css={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box
					css={{
						direction: "column",
						gap: "0",
					}}
				>
					<Text
						size="page-title"
						style={{
							fontSize: "clamp(1rem, 2.5vw, 3rem)",
							lineHeight: 0.6,
							opacity: 0.3,
						}}
					>
						のみもの
					</Text>
					<Text
						size="page-title"
						style={{ fontSize: "clamp(2rem, 5vw, 7rem)", lineHeight: 1.1 }}
					>
						Nomimono
					</Text>
				</Box>
				<Text size="subtitle1">A simple web3-flavored component library</Text>
			</Box>
		</Box>
	);
};
