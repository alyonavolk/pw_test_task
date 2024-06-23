import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import App from "./app";

const html = renderToStaticMarkup(
	<div>
		<App />
	</div>
);

export default html;
