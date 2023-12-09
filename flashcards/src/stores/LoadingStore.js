import { makeAutoObservable } from "mobx";


class LoadingStore {
    isLoading = false;

    constructor(isLoading) {
        makeAutoObservable(this);
    }

    setLoading(value) {
        this.isLoading = value;
    }

}

export const loadingStore = new LoadingStore();

