const Props = ({ spec }: any) => {
	const props = spec.props;
	const keys = Object.keys(props);
	const rows = keys.map((key) => {
		//@ts-ignore
		const prop: any = props[key];
		return (
			<tr
				key={key}
				className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20 "
			>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{key}{" "}
					{prop.required ? <span className="nx-text-red-500">*</span> : null}
				</td>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{prop.tsType.raw || prop.tsType.name}
				</td>
				<td className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 ">
					{prop.description}
				</td>
			</tr>
		);
	});

	return (
		<table className="nx-overflow-x-scroll nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0 nx-w-full">
			<thead className="nx-text-left	">
				<tr className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20">
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Props
					</th>
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Type
					</th>
					<th className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 ">
						Description
					</th>
				</tr>
			</thead>
			<tbody className="" style={{ width: "200%" }}>
				{rows}
			</tbody>
		</table>
	);
};

export default Props;
