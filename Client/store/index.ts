import {action, observable} from "mobx";

export class Store {
    @observable
    count: number = 0;

    @action
    increment() {
        ++this.count;
    }

    @action
    decrement() {
        --this.count;
    }
}

export default new Store();