import { fetchWords } from "../api/words";
import { fetchRemoveWord } from "../api/removeWord";
import { fetchEditWord  } from "../api/editWord";
import { fetchNewWord } from "../api/createWord";
import { makeAutoObservable, toJS } from "mobx";

class WordsStore {
    words = [];
    selectedSort = '';

    constructor() {
        makeAutoObservable(this);
    }

    setWords(words) {
        this.words = words;
    }

    async loadWords() {
        const loadingWords = await fetchWords();
        this.setWords(loadingWords);
    }

    removeWord(value) {
        fetchRemoveWord(value);
        const updatedArr = this.words.filter(w => w.id !== value.id);
        this.setWords(updatedArr);
    }

    editWord(value) {
        fetchEditWord(value);

        this.words = this.words.map((item) => {
            if (item.id === value.id) {
                return {
                    id: value.id,
                    ...value
                }
            }

            return item;
        })
    }
    
    createWord(value) {
        fetchNewWord(value);
        this.setWords([value, ...this.words])
    }

    sortWords() {
        if(this.selectedSort) {
            this.words = [...toJS(this.words)].sort((a, b) => a[this.selectedSort].localeCompare(b[this.selectedSort]));
            return;
        }
        
        this.words = toJS(this.words);
    }

    setSelectedSort(value) {
        this.selectedSort = value;
    }
}

export const wordsStore = new WordsStore();



