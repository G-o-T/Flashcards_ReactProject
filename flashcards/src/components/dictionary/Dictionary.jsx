import React from "react";
import Title from "../Title";
import Select from "../Select";
import WordRow from "./WordRow";
import { wordsData } from "../../testData";
import { keys } from "../../testData";
import { useState } from "react";
import Form from "../Form";

function Dictionary() {
    const [words, setWords] = useState(wordsData);

    const [selectedSort, setSelectedSort] = useState('');

    //Функция для сортировки слов
    const sortWords = (sort) => {
        setSelectedSort(sort); 
        console.log(sort);
    }

    //Функция для добавления новых слов
    const createWord = (newWord) => {
        setWords([...words, newWord]);
    }

    return (
        <main className="dictionary">
            <Title title="dictionary"/>
            <div className="dictionary__container">
                <Select
                    value={selectedSort}
                    onChange={sortWords}
                    defaultValue="sort"  
                    options={keys}
                    key = {keys}            
                />
            </div>
            <div className="table">
                <div className="table__container">
                    {words.map(word => <WordRow data={word} key={word.id}/>)}
                </div>
            </div>
            <Form create={createWord}/>
        </main>
    )

}

export default Dictionary;


// : <div className="warning">There are no words in the dictionary yet</div>