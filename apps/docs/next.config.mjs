import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.js",
	defaultShowCopyCode: true,
});
export default withNextra({ reactStrictMode: true, transpilePackages: ["ui"] });

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
