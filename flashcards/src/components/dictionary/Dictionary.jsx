import React from "react";
import Title from "../Title";
import Select from "../Select";
import WordRow from "./WordRow";
import { wordsData } from "../../testData";
import { useState } from "react";
import Form from "../Form";
import SearchForm from "../SearchForm";


function Dictionary() {
    const [words, setWords] = useState(wordsData);
    const [keys, setKeys] = useState([...new Set(wordsData.map(wordData => wordData.tags))]);

    const [searchQuery, setSearchQuery] = useState('');

    const [selectedSort, setSelectedSort] = useState('');

    //Функция для фильтрации слов по теме
    const sortWords = (sort) => {
        console.log(wordsData);
        setWords(wordsData);
        setSelectedSort(sort);
        setWords([...words].filter(w => w.tags === sort));
        console.log(sort);
        console.log(words.map(w => w.tags));
    }

    //Функция для добавления новых слов
    const createWord = (newWord) => {
        setWords([...words, newWord]);
        setKeys([...keys, newWord.tags]);
    }

    //Функция для удаления слов
    const removeWord = (currentWord) => {
        setWords(words.filter(w => w.id !== currentWord.id));
    } 

    return (
        <main className="dictionary">
            <Title title="dictionary"/>
            <div className="dictionary__container">
                <SearchForm />
                <Select
                    value={selectedSort}
                    onChange={sortWords}
                    defaultValue="filter out per topics"  
                    options={keys}        
                />
            </div>
            <div className="table">
                {words.length 
                ? 
                <div className="table__container">
                    {words.map(word => <WordRow remove={removeWord} data={word} key={word.id}/>)}
                </div>
                :
                <div className="warning">There are no words in the dictionary yet</div>
                }

            </div>
            <Form create={createWord}/>
        </main>
    )

}

export default Dictionary;

