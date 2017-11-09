import * as React from "react";
import "../scss/main.scss";

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    {this.props.children}
                </div>
            </main>
        );
    }
}

export default Main;