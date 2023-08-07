import React, { useState, useMemo } from "react";
import Title from "../Title";
import Select from "../Select";
import WordRow from "./WordRow";
import { wordsData } from "../../testData";
import Form from "../Form";

function Dictionary() {
    const [words, setWords] = useState(wordsData);
    const [keys, setKeys] = useState([...new Set(wordsData.map(wordData => wordData.tags))]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    // const [word, setWord] = useState(words.id);


    //Для улучшения производительности, проверка сортировки отработает только при определенных изменениях
    const sortedWords = useMemo(() => {
        if(selectedSort) {
            return [...words].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return words;
    }, [selectedSort, words]);

    //Функция для добавления новых слов
    const createWord = (newWord) => {
        setWords([...words, newWord]);
        setKeys([...keys, newWord.tags]);
    };

    //Черновая (пока не доработана) функция для редактирования слов
    const editWord = (editedWord) => {
        setWords([...words, editedWord]);
    };

    //Функция для удаления слов
    const removeWord = (currentWord) => {
        setWords(words.filter(w => w.id !== currentWord.id));
    };

    //Функция для сортировки слов 
    const sortWords = (sort) => {
        setSelectedSort(sort);
    };

    //Функция для поиска слов 
    const sortedAndSearchedWords = useMemo(() => {
        return sortedWords.filter(w => w.english.toLowerCase().includes(searchQuery) || w.russian.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedWords])

    return (
        <main className="main margin38">
            <Title title="dictionary"/>
            <div className="dictionary">
                <div className="dictionary__container">
                    <Select
                        defaultValue="sort"
                        options={[
                            {value: 'english', name: 'sort by word'}, 
                            {value: 'russian', name: 'sort by meaning'}
                        ]}
                        value={selectedSort}
                        onChange={sortWords}
                        >
                    </Select>
                    <div className="search-form">
                        <input 
                            type="text" 
                            className="search-form__search-field" 
                            placeholder="search" 
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* <Select
                        value={selectedSort}
                        onChange={sortWords}
                        defaultValue="filter out per topics"  
                        options={keys}        
                    /> */}
                </div>
                <div className="table">
                    {sortedAndSearchedWords.length 
                    ? 
                    <div className="table__container">
                        {sortedAndSearchedWords.map(word => <WordRow remove={removeWord} data={word} key={word.id} edit={editWord}/>)}
                    </div>
                    :
                    <div className="warning">There are no words in the dictionary yet</div>
                    }
                </div>
                <Form create={createWord}/>
            </div>
        </main>
    )

}

export default Dictionary;

