import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useInput } from "../../hooks/validationHooks";
import Error from "../Error";

function Modal({active, setActive, data, edit}) {

    const english = useInput(data.english, {isEmptyError: true, latinError: true});
    const russian = useInput(data.russian, {isEmptyError: true, cyrillicError: true});
    const transcription = useInput(data.transcription, {isEmptyError: true});
    const tags = useInput(data.tags, {isEmptyError: true});
    
    const isAttendedFields = english.isAttended || russian.isAttended || transcription.isAttended || tags.isAttended;
    
    const editWord = (e) => {
        e.preventDefault();

        const editedWord = {
            english: english.value,
            russian: russian.value,
            transcription: transcription.value,
            tags: tags.value,
        }

        edit(editedWord, data.id);
        setActive(false);
    }

    const onClickCancelHandler = (e) => {
        e.preventDefault();
        english.onCancel(data.english);
        russian.onCancel(data.russian);
        transcription.onCancel(data.transcription);
        tags.onCancel(data.tags);
        setActive(false);
    }

    const englishErrorField = english.isAttended && (english.latinError || english.isEmptyError);
    const russianErrorField = russian.isAttended && (russian.cyrillicError || russian.isEmptyError);
    const transcriptionErrorField = transcription.isAttended && transcription.isEmptyError;
    const tagsErrorField = tags.isAttended && tags.isEmptyError;

    return (
        <div className={active ? "modal modal__active" : "modal"} onClick={(e) => onClickCancelHandler(e)}>
            <div className={active ? "modal__content modal__content_active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <form className="modal__form">
                    <div className="modal__group">
                        <div className="modal__block">
                            <Input 
                                placeholder="word"
                                name='english'
                                value={english.value}
                                onBlur={e => english.onBlur(e)}
                                onChange={e => english.onChange(e)}
                                className={english.isAttended && english.inputValidError ? "input input__error" : "input"}
                            />
                            {englishErrorField ? <Error error={english.errorText}/> : <></>}
                        </div>
                        <div className="modal__block">
                            <Input 
                                placeholder="meaning"
                                value={russian.value}
                                onBlur={e => russian.onBlur(e)}
                                name='russian'
                                onChange={e => russian.onChange(e)}
                                className={russian.isAttended && russian.inputValidError ? "input input__error" : "input"}         
                            />
                            {russianErrorField ? <Error error={russian.errorText}/> : <></>}
                        </div>
                        <div className="modal__block">
                            <Input 
                                placeholder="transcription"
                                value={transcription.value}
                                onBlur={e => transcription.onBlur(e)}
                                onChange={e => transcription.onChange(e)}
                                className={transcription.isAttended && transcription.inputValidError ? "input input__error" : "input"} 
                            />
                            {transcriptionErrorField ? <Error error={transcription.errorText}/> : <></>}
                        </div>
                        <div className="modal__block">
                            <Input 
                                placeholder="topic"
                                value={tags.value}
                                onBlur={e => tags.onBlur(e)}
                                onChange={e => tags.onChange(e)}
                                className={tags.isAttended && tags.inputValidError ? "input input__error" : "input"} 
                            />
                            {tagsErrorField ? <Error error={tags.errorText}/> : <></>}
                        </div>
                    </div>
                    <div className="modal__group">
                        <Button className='modal__btn modal__btn_colored' disabled={!isAttendedFields || (english.inputValidError || russian.inputValidError || transcription.inputValidError || tags.inputValidError)} onClick={(e) => editWord(e)}>save</Button>
                        <Button className='modal__btn modal__btn_bordered' onClick={(e) => onClickCancelHandler(e)}>cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal