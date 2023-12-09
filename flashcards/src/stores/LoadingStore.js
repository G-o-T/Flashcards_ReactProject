import { makeAutoObservable } from "mobx";


class LoadingStore {
    isLoading = false;

    constructor(isLoading) {
        makeAutoObservable(this);
        // this.isLoading = isLoading;
    }

    setLoading(value) {
        this.isLoading = value;
        // console.log(this.isLoading);
    }

}

export const loadingStore = new LoadingStore();

