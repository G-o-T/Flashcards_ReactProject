import React from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form({create}) {

    const [newWord, setNewWord] = useState({
        english: '',
        russian: '',
        transcription: '',
        tags: '',
    });

    const addWord = (e) => {
        e.preventDefault();

        create(newWord);

        setNewWord({
            english: '',
            russian: '',
            transcription: '',
            tags: '',
        });

    }

    return (
        <form className="form">
            <Input 
                placeholder="word"
                value={newWord.english}
                onChange={e => setNewWord({...newWord, english: e.target.value})}
            />
            <Input 
                placeholder="meaning"
                value={newWord.russian}
                onChange={e => setNewWord({...newWord, russian: e.target.value})}
            />
            <Input 
                placeholder="transcription"
                value={newWord.transcription}
                onChange={e => setNewWord({...newWord, transcription: e.target.value})}
            />
            <Input 
                placeholder="topic"
                value={newWord.tags}
                onChange={e => setNewWord({...newWord, tags: e.target.value})}
            />
            <Button onClick={addWord}>add word</Button>
        </form>
    )
}

export default Form;