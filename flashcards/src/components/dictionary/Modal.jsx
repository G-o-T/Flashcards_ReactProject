import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

function Modal({active, setActive, data, edit}) {

    const [editedWord, setEditedWord] = useState(data);

    function saveEdition(e) {
        e.preventDefault();
        edit(editedWord);
        setActive(false);
    }

    return (
        <div className={active === true ? "modal modal__active" : "modal"} onClick={() => setActive(false)}>
            <div className={active === true ? "modal__content modal__content_active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <form className="modal__form">
                    <div className="modal__group">
                        <Input 
                            placeholder="word"
                            value={editedWord.english}
                            onChange={e => setEditedWord({...editedWord, english: e.target.value})}
                        />
                        <Input 
                            placeholder="meaning"
                            value={editedWord.russian}
                            onChange={e => setEditedWord({...editedWord, russian: e.target.value})}
                        />
                        <Input 
                            placeholder="transcription"
                            value={editedWord.transcription}
                            onChange={e => setEditedWord({...editedWord, transcription: e.target.value})}
                        />
                        <Input 
                            placeholder="topic"
                            value={editedWord.tags}
                            onChange={e => setEditedWord({...editedWord, tags: e.target.value})}
                        />
                    </div>
                    <div className="modal__group">
                        <Button className='modal__btn modal__btn_colored' onClick={(e) => saveEdition(e)}>save</Button>
                        <Button className='modal__btn modal__btn_bordered' onClick={() => setActive(false)}>cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal