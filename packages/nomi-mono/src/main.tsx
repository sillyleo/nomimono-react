import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

function App() {
	return (
		<h1 className="text-6xl text-red-600 font-bold underline">
			Hello world! This is a placeholder file
		</h1>
	);
}
