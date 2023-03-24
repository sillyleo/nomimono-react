import {
	Tooltip as TooltipPrimitive,
	TooltipAnchor,
	useTooltipState,
} from "ariakit/tooltip";
import { Radix, styled } from "../stitches.config";

const StyledTooltip = styled(TooltipPrimitive, {
	backgroundColor: Radix.blackA.blackA11,
	backdropFilter: "blur(4px)",
	color: "$mauve1",
	borderRadius: "$2xl",
	px: "$3",
	py: "$2",
	fontSize: "$xs",
	fontWeight: 400,
	fontFamily: "$body",
	boxShadow: "0 0 0 1px $mauve12",
});

export function Tooltip({
	label,
	children,
}: {
	label: React.ReactNode;
	children: React.ReactNode;
}) {
	const tooltip = useTooltipState();
	return (
		<>
			<TooltipAnchor style={{ display: "inline-block" }} state={tooltip}>
				{children}
			</TooltipAnchor>
			<StyledTooltip state={tooltip}>{label}</StyledTooltip>
		</>
	);
}
