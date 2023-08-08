import React from "react";
import CardObverse from "./CardObverse";
import CardReverse from "./CardReverse";
import { Link } from "react-router-dom";
import Button from "../Button";
import { CSSTransition } from "react-transition-group";

function Card({tag, index, length, word, transcription, meaning, failureAction, successAction, restartTraining, successScore, failureScore, onClick, showBack}) {
   

    return (
        
        <div className="card">
            <CSSTransition
                in={showBack}
                timeout={300}
                classNames='flip'
            >
                <button className="card__field-container" onClick={onClick}>
                    {/* Разобраться со счетчиком */}
                    {index < length-1
                    ?
                    <>
                        <CardObverse tag={tag} index={index+1} length={length} word={word} transcription={transcription}/>
                        <CardReverse tag={tag} index={index+1} length={length} meaning={meaning}/>
                    </>
                    :
                    <>
                        <CardObverse tag="good_job" index={successScore} length={length} word="Well done" transcription="The roots of education are bitter, but the fruit is sweet"/>
                        <CardReverse tag="good_job" index={successScore} length={length} meaning={`You have learnt ${successScore} of ${successScore+failureScore}`}/>
                    </>
                    }
                </button>
            </CSSTransition>

            {index < length
            ?
            <div className="card__btns">
                <Button className='card__btn card__btn_failure text-orange' onClick={failureAction}>don't know</Button>
                <Button className='card__btn card__btn_success text-blue' onClick={successAction}>know</Button>
            </div>
            :
            <div className="card__btns">
                <Button className='card__btn card__btn_failure text-orange' onClick={restartTraining}>start again</Button>
                <Button className='card__btn card__btn_success text-blue'><Link to="/flashcards">new topic</Link></Button>
            </div>
            }
        </div>
        
    )
}

export default Card;