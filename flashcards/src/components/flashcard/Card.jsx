import React from "react";
import CardObverse from "./CardObverse";
import CardReverse from "./CardReverse";
import { Link } from "react-router-dom";
import Button from "../Button";

function Card({tag, index, length, word, transcription, meaning, pressed, failureAction, successAction, restartTraining, successScore, failureScore, onClick}) {
   

    return (
        
        <div className="card">
            <button className="card__field-container" onClick={onClick}>
                {pressed === "off"
                ?
                (index < length
                ?
                <CardObverse tag={tag} index={index} length={length} word={word} transcription={transcription}/>
                :
                <CardObverse tag="good_job" index={successScore} length={successScore+failureScore} word="Well done" transcription="The roots of education are bitter, but the fruit is sweet"/>
                )
                :
                (index < length
                ?
                <CardReverse tag={tag} index={index} length={length} meaning={meaning}/>
                :
                <CardReverse tag="good_job" index={successScore} length={successScore+failureScore} meaning={`You have learnt ${successScore} of ${successScore+failureScore}`}/>
                )
                }       
            </button>
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