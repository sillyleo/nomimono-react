module.exports = {
	source: ["tokens/theme-transformed.json"],
	fileHeader: {
		autoGeneratedFileHeader: () => {
			return [`Do not edit directly, this file was auto-generated`];
		},
	},
	platforms: {
		web: {
			transformGroup: "css",
			buildPath: "tokens/",
			files: [
				{
					destination: "../theme.json",
					format: "json/nested",
					options: {
						fileHeader: "autoGeneratedFileHeader",
					},
				},
			],
		},
		// web: {
		//   transformGroup: "css",
		//   buildPath: "tokens/",
		//   files: [
		//     {
		//       destination: "../src/themeToken.ts",
		//       format: "typescript/module-declarations",
		//       options: {
		//         fileHeader: "autoGeneratedFileHeader",
		//       },
		//     },
		//   ],
		// },
		// css: {
		//   transformGroup: 'css',
		//   buildPath: 'tokens/',
		//   prefix: 'figma',
		//   files: [
		//     {
		//       destination: 'variables.css',
		//       format: 'css/variables',
		//       options: {
		//         fileHeader: 'autoGeneratedFileHeader',
		//       },
		//     },
		//   ],
		// },
	},
};
