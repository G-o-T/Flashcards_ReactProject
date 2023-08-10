import React, { useEffect, useRef } from "react";
import CardObverse from "./CardObverse";
import CardReverse from "./CardReverse";
// import { Link } from "react-router-dom";
import Button from "../Button";
import { CSSTransition } from "react-transition-group";

function Card({tag, index, length, word, transcription, meaning, failureAction, successAction, restartTraining, onClick, showBack, btnLeftTitle, btnRightTitle, btnLeftAction, btnRightAction}) {
   
    //Устанавливает фокус на кнопку переворота карточки после рендеринга каждой новой карточки
    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current.focus();
    });

    return (
        
        <div className="card">
            <CSSTransition
                in={showBack}
                timeout={300}
                classNames='flip'
            >
                <button ref={buttonRef} className="card__field-container" onClick={onClick}>
                        <CardObverse tag={tag} index={index} length={length} word={word} transcription={transcription}/>
                        <CardReverse tag={tag} index={index} length={length} meaning={meaning}/>
                </button>
            </CSSTransition>
            <div className="card__btns">
                <Button className='card__btn card__btn_failure text-orange' onClick={btnLeftAction}>{btnLeftTitle}</Button>
                <Button className='card__btn card__btn_success text-blue' onClick={btnRightAction}>{btnRightTitle}</Button>
            </div>
        </div>
        
    )
}

export default Card;