import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useInput } from "../../hooks/validationHooks";
import Error from "../UI/Error/Error";

function Form({create}) {

    const english = useInput('', {isEmptyError: true, latinError: true});
    const russian = useInput('', {isEmptyError: true, cyrillicError: true});
    const transcription = useInput('', {isEmptyError: true});
    const tags = useInput('', {isEmptyError: true});

    const addWord = (e) => {
        e.preventDefault();

        const newWord = {
            id: Date.now(),
            english: english.value,
            transcription: "[ " + transcription.value + " ]",
            russian: russian.value,
            tags: tags.value,
            "tags_json": '[]'
        }

        create(newWord);

        english.clearInput();
        russian.clearInput();
        transcription.clearInput();
        tags.clearInput();

    }

    const handleClick = (e) => {
        addWord(e);
    }

    const englishErrorField = english.isAttended && (english.latinError || english.isEmptyError);
    const russianErrorField = russian.isAttended && (russian.cyrillicError || russian.isEmptyError);
    const transcriptionErrorField = transcription.isAttended && transcription.isEmptyError;
    const tagsErrorField = tags.isAttended && tags.isEmptyError;

    return (
        <>
            <form className="form">
                <div className="form__block">
                    <Input 
                        placeholder="word"
                        value={english.value}
                        name='english'
                        onChange={e => english.onChange(e)}
                        onBlur={e => english.onBlur(e)}
                        className={english.isAttended && english.inputValidError ? "input input__error" : "input" }
                    />
                    {englishErrorField ? <Error error={english.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="meaning"
                        value={russian.value}
                        name='russian'
                        onChange={e => russian.onChange(e)}
                        onBlur={e => russian.onBlur(e)}
                        className={russian.isAttended && russian.inputValidError ? "input input__error" : "input" }
                    />
                    {russianErrorField ? <Error error={russian.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="transcription"
                        value={transcription.value}
                        name='transcription'
                        onChange={e => transcription.onChange(e)}
                        onBlur={e => transcription.onBlur(e)}
                        className={transcription.isAttended && transcription.inputValidError ? "input input__error" : "input" }
                    />
                    {transcriptionErrorField ? <Error error={transcription.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="topic"
                        value={tags.value}
                        name='tags'
                        onChange={e => tags.onChange(e)}
                        onBlur={e => tags.onBlur(e)}
                        className={tags.isAttended && tags.inputValidError ? "input input__error" : "input" }
                    />
                    {tagsErrorField ? <Error error={tags.errorText}/> : <></>}

                </div>
                <Button onClick={handleClick} className='btn' disabled={english.inputValidError || russian.inputValidError || transcription.inputValidError || tags.inputValidError}>add word</Button>
            </form>


        </>

    )
}

export default Form;