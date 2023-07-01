import React from "react";
// import { useState } from "react";

function WordRow({data}) {

    // const [state, setState] = useState('dis')

    const editWord = () => {
        console.log('Слово хотят отредактировать');
    }

    const removeWord = () => {
        console.log('Слово хотят удалить');
    }

    const changeDiv = () => {
        console.log('Только сейчас надо показывать иконки');
    }

    return (
        <div className="table__row" onMouseOver={changeDiv}>
            <div className="table__cell table__cell_main">{data.english}</div>
            <div className="table__cell table__cell_meaning">{data.russian}</div>
            <div className="table__cell table__cell_transc">{data.transcription}</div>
            <div className="table__cell table__cell_tag">{data.tags}</div>
            <div className="table__btns">
                <button disabled className="table__btn" onClick={editWord}><img src="./icon_edit.png" alt='edit icon'></img></button>
                <button disabled className="table__btn" onClick={removeWord}><img src="./icon_remove.png" alt='delete icon'></img></button>
            </div>
        </div>
    )
}

export default WordRow;