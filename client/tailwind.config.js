module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		// ...
	],
};
