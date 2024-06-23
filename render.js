const path = require("path");
const fs = require("fs");

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

const App = require("./src/index.server.js").default;

const template = fs.readFileSync(path.join(__dirname, "src", "pages", "template.html"), "utf8");

const finalHtml = template.replace("<!-- CONTENT -->", App);

fs.writeFileSync(path.join(__dirname, "build", "index.html"), finalHtml);
