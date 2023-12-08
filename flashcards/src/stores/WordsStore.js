import { fetchWords } from "../api/words";
import { makeAutoObservable } from "mobx";


class WordsStore {
    words = 0;

    constructor(words) {
        makeAutoObservable(this);
    }

    async setWords() {
        const wordsResponse = await fetchWords();
        this.words = wordsResponse;
    }


}

export const wordsStore = new WordsStore();

