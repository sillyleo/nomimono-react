import "./demo"; // contains <my-component>

declare global {
	namespace JSX {
		interface IntrinsicElements {
			["my-component"]: React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}

const Demo = () => {
	return (
		<my-component onClick={() => console.log("clicked")}>Content</my-component>
	);
};

export default Demo;
