import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { blackA } from "@radix-ui/colors";
import { styled } from "../stitches.config";
import { Box } from "..";
import { IconButton } from "../IconButton";

export const Dialog = () => {
	// this is instructions for the user of the component
	return (
		<code>
			<pre>
				{`<Dialog.Root>
	<Dialog.Trigger asChild>
		<Button>Open Dialog with Close + Scroll</Button>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay>
			<Dialog.ContentWithClose>
				{/* repeat paragraph 10 times */}
				{[...Array(20)].map((_, i) => (
					<Text key={i}>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac
						purus in massa egestas mollis varius; dignissim elementum.
						Mollis tincidunt mattis hendrerit dolor eros enim, nisi
						ligula ornare. Hendrerit parturient habitant pharetra rutrum
						gravida porttitor eros feugiat. Mollis elit sodales taciti
						duis praesent id. Consequat urna vitae morbi nunc congue.
					</Text>
				))}
				<Dialog.Close asChild>
					<Button>Close Button in content</Button>
				</Dialog.Close>
			</Dialog.ContentWithClose>
		</Dialog.Overlay>
	</Dialog.Portal>
</Dialog.Root>`}
			</pre>
		</code>
	);
};

export const Root = styled(DialogPrimitive.Root, {
	boxSizing: "border-box",
});
Root.displayName = "Root";
Dialog.Root = Root;
export const Trigger = styled(DialogPrimitive.Trigger, {});
Trigger.displayName = "Trigger";
Dialog.Trigger = Trigger;
export const Portal = styled(DialogPrimitive.Portal, {});
Portal.displayName = "Portal";
Dialog.Portal = Portal;
export const Title = styled(DialogPrimitive.Title, {
	fontSize: "$base",
	color: "$baseText",
	fontWeight: "$bold",
});
Title.displayName = "Title";
Dialog.Title = Title;
export const Description = styled(DialogPrimitive.Description, {
	fontSize: "$sm",
	color: "$baseTextTertiary",
});
Description.displayName = "Description";
Dialog.Description = Description;
export const Close = styled(DialogPrimitive.Close, {});
Close.displayName = "Close";
Dialog.Close = Close;
export const Overlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: blackA.blackA8,
	position: "fixed",
	inset: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
Overlay.displayName = "Overlay";
Dialog.Overlay = Overlay;
export const Content = styled(DialogPrimitive.Content, {
	boxSizing: "border-box",
	backgroundColor: "$baseBackground",
	borderRadius: "$2xl",
	boxShadow: "$2",
	zIndex: 40,
	position: "relative",
	width: "90vw",
	maxWidth: "650px",
	// maxHeight: "85vh",
	overflowY: "auto",
	"&:focus": { outline: "none" },
});
Content.displayName = "Content";
Dialog.Content = Content;

export const ContentWithClose = (props: any) => {
	return (
		<Content {...props}>
			<Box
				css={{
					position: "absolute",
					top: "$2",
					right: "$2",
					zIndex: 50,
				}}
			>
				<DialogPrimitive.Close asChild>
					<IconButton isRound name="HiOutlineX" intent="ghost" />
				</DialogPrimitive.Close>
			</Box>
			<Box
				css={{
					padding: "$6",
					pb: "$12",
					boxSizing: "border-box",
					position: "relative",
					WebkitMaskImage:
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
					maskImage:
						"linear-gradient(to bottom, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
					width: "100%",
					minWidth: "100%",
					maxHeight: "85vh",
					overflowY: "auto",
					":focus": { outline: "none" },
				}}
			>
				{props.children}
			</Box>
		</Content>
	);
};
ContentWithClose.displayName = "ContentWithClose";
Dialog.ContentWithClose = ContentWithClose;
