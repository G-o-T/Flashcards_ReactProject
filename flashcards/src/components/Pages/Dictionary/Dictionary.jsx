import React, { useEffect, useState, useMemo } from "react";
import Title from "../../UI/Title/Title";
import Select from "../../UI/Select/Select";
import WordRow from "../../WordRow/WordRow";
import Form from "../../Form/Form";
// import Loading from "../../UI/Loading/Loading";
import { wordsStore } from "../../../stores/WordsStore";
import { observer } from 'mobx-react-lite';
import Table from "../../Table/Table";

function DictionaryComponent() {

    useEffect(() => {
        wordsStore.loadWords();
    }, []);

    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    //Для улучшения производительности, проверка сортировки отработает только при определенных изменениях
    const sortedWords = useMemo(() => {
        // if(selectedSort) {
        //     return [...words].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        // }
        // return words;
        wordsStore.sortWords();
    }, [wordsStore.selectedSort, wordsStore.words]);


    //Функция для сортировки слов 
    const sortWords = (sort) => {
        wordsStore.setSelectedSort(sort);
    };
    
    // //Функция для поиска слов 
    // const sortedAndSearchedWords = useMemo(() => {
    //     return sortedWords.filter(w => w.english.toLowerCase().includes(searchQuery) || w.russian.toLowerCase().includes(searchQuery))
    // }, [searchQuery, sortedWords])

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
                        value={wordsStore.selectedSort}
                        onChange={sortWords}
                        >
                    </Select>
                    {/* <div className="search-form">
                        <input 
                            type="text" 
                            className="search-form__search-field" 
                            placeholder="search" 
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div> */}
                </div>
                <Table 
                    sortedAndSearchedWords={wordsStore.words}
                    // error={error}
                />
                <Form />
            </div>
        </main>
    )

}

const Dictionary = observer(DictionaryComponent);

export default Dictionary;

