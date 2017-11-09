import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;