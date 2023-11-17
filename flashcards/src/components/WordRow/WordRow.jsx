import React, { useState} from "react";
import EditField from "../UI/EditField/EditField";
import ModalWindow from "../UI/ModalWindow.jsx/ModalWindow";
import Button from "../UI/Button/Button";

function WordRow({data, remove, edit, error}) {

    const [modalActive, setModalActive] = useState(false);
    const [modalWindowActive, setModalWindowActive] = useState(false);

    function showModal() {
            setModalActive(true);
    }

    function showModalWindow() {
        setModalWindowActive(true);
    }

    function onClickRemoveHandler(e) {
        e.preventDefault();
        remove(data);
        setModalWindowActive(false);

    }

    return (
        <>
            <EditField data={data} active={modalActive} setActive={setModalActive} edit={edit} remove={remove} error={error}></EditField>
            <ModalWindow active={modalWindowActive} setActive={setModalWindowActive}>
                <div className="modal-window">
                    <div className="modal__question">Are you sure you want to delete this word?</div>
                    <div className="modal__btns">
                        <Button className='modal__btn modal__btn_bordered' onClick={(e) => setModalWindowActive(false)}>cancel</Button>
                        <Button className='modal__btn modal__btn_colored-red' onClick={(e) => onClickRemoveHandler(e)}>delete</Button>
                    </div>
                </div>
            </ModalWindow>
            <div className="table__row">
            <div className="table__cell table__cell_main">{data.english}</div>
            <div className="table__cell table__cell_meaning">{data.russian}</div>
            <div className="table__cell table__cell_transc">{data.transcription}</div>
            <div className="table__cell table__cell_tag">{data.tags}</div>
            <div className="table__btns">
                <button className="table__btn" onClick={() => showModal()}><img src="./icon_edit.png" alt='edit icon'></img></button>
                <button className="table__btn" onClick={() => showModalWindow()}><img src="./icon_remove.png" alt='delete icon'></img></button>
            </div>
        </div>
        </>
    )
}

export default WordRow;