import { Display } from "./Display";

export const Story = ({ id }: { id: string }) => {
	return (
		<Display css={{ p: 0 }}>
			<iframe
				src={`https://nomi-workshop.vercel.app/iframe.html?args=&id=${id}--primary&viewMode=story&shortcuts=true&singleStory=true`}
				width="100%"
				height="130"
			></iframe>
		</Display>
	);
};
