import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

const render = (Root: { new(): React.Component }) => {
    ReactDOM.render(
        <Root/>,
        document.getElementById("app")
    );
};

render(App);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const Root = require("./components/App").default;
        render(Root);
    });
}