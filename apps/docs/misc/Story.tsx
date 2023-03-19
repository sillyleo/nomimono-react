import { Display } from "nomimono";

export const Story = ({ url }: { url: string }) => {
	return (
		<Display css={{ p: 0 }}>
			<iframe
				src={`${url}&shortcuts=true&singleStory=true`}
				width="100%"
				height="130"
			></iframe>
		</Display>
	);
};
