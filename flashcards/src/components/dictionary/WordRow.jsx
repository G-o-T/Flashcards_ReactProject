import React, { useState} from "react";
import Modal from "./Modal";

function WordRow({data, remove, edit}) {

    const [modalActive, setModalActive] = useState(false);

    function showModal() {
            setModalActive(true);
    }

    return (
        <>
            <Modal data={data} active={modalActive} setActive={setModalActive} edit={edit}></Modal>
            <div className="table__row">
            <div className="table__cell table__cell_main">{data.english}</div>
            <div className="table__cell table__cell_meaning">{data.russian}</div>
            <div className="table__cell table__cell_transc">{data.transcription}</div>
            <div className="table__cell table__cell_tag">{data.tags}</div>
            <div className="table__btns">
                <button className="table__btn" onClick={() => showModal()}><img src="./icon_edit.png" alt='edit icon'></img></button>
                <button className="table__btn" onClick={() => remove(data)}><img src="./icon_remove.png" alt='delete icon'></img></button>
            </div>
        </div>
        </>
    )
}

export default WordRow;