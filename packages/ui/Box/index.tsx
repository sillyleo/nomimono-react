import { styled } from "../stitches.config";

export const Box = styled("div", {});

export const Stack = styled(Box, {
	display: "flex",
	flexDirection: "column",
	gap: "$4",
});
