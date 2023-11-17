import React, { useState, useMemo, useContext } from "react";
import Title from "../../UI/Title/Title";
import Select from "../../UI/Select/Select";
import Form from "../../Form/Form";
import { WordsContext } from "../../Context/WordsContext";
import Table from "../../Table/Table";

function Dictionary() {
    const initialWords = useContext(WordsContext);
    let [words, setWords] = useState(initialWords);

    const [keys, setKeys] = useState([...new Set(words.map(wordData => wordData.tags))]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    
    //Функция для редактирования слов и отправки изменений на сервер
    const editWord = (editedWord, currentId) => {
        let updatedWord = words.filter(w => w.id === currentId);

        updatedWord = {
            "id": currentId,
            "english": editedWord.english,
            "transcription": editedWord.transcription,
            "russian":editedWord.russian,
            "tags": editedWord.tags,
            "tags_json": `[${JSON.stringify(editedWord.tags)}]`
        }

        const restWords = words.filter(w => w.id !== currentId);
        setWords([updatedWord, ...restWords]); 
        
        fetch( `api/words/${updatedWord.id}/update`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify( updatedWord ),
        })
            .then(() => console.log('word was changed'))
            .catch( e => setError(e, e.message=`Error sending word to server: ${e}`));
    
    }

    //Для улучшения производительности, проверка сортировки отработает только при определенных изменениях
    const sortedWords = useMemo(() => {
        if(selectedSort) {
            return [...words].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return words;
    }, [selectedSort, words]);

    //Функция для добавления новых слов
    const createWord = (newWord) => {
        setWords([newWord, ...words]);
        setKeys([...keys, newWord.tags]);

        //Эта часть функции добавляет слова на сервер, но она не нужна по условиям задания

        // fetch( `api/words/add`, {
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify( newWord ),
        // })
        //     .then(() => console.log('word was added'))
        //     .catch(error => console.log( `Error sending word to server: ${error}` ));

    };

    //Функция для удаления слов
    const removeWord = (currentWord) => {
        setWords(words.filter(w => w.id !== currentWord.id));

        //Эта часть функции удаляет слова на сервере, но она не нужна по условиям задания

        // fetch( `api/words/${currentWord.id}/delete`, {
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/json' },
        // })
        //     .then(() => console.log('word was deleted'))
        //     .catch(error => console.log( `Error deleting word from server: ${error}` ));
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
                </div>
                <Table sortedAndSearchedWords={sortedAndSearchedWords} removeWord={removeWord} editWord={editWord} error={error}/>
                <Form create={createWord}/>
            </div>
        </main>
    )

}

export default Dictionary;

