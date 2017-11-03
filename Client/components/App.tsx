import * as React from "react";
import {inject, observer} from "mobx-react";
import {Store} from "../store/index";

interface IProps {
    store?: Store;
}

@inject("store")
@observer
class App extends React.Component<IProps> {
    store: Store;

    constructor(props: IProps) {
        super(props);

        this.store = props.store!;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.store.increment()}>increment</button>
                <button onClick={() => this.store.decrement()}>decrement</button>
                <div>{this.store.count}</div>
            </div>
        );
    }
}

export default App;