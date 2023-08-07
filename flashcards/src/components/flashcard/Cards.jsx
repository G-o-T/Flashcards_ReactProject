import React, { useState } from "react";
import Field from "./Field";
import Button from "../Button";
import { wordsData } from "../../testData";
import Card from "./Card";



function Cards() {
    const [index, setIndex] = useState(0);
    const [successScore, setSuccessScore] = useState(0);
    const [failureScore, setFailureScore] = useState(0);
    const [pressed, setPressed] = useState("on");
    const [flash, setFlash] = useState("off");

    let w = wordsData[index];
    let tagWords = wordsData;

    function showNextCard() {
        setIndex(prevState => prevState + 1);
    }

    function showPrevCard() {
        if (index > 0) {
            setIndex(prevState => prevState - 1);
        }
    }

    function restartTraining() {
        setIndex(0); 
        setSuccessScore(0);
        setFailureScore(0); 
    }

    function successAction(e) {
        e.stopPropagation();
        showNextCard();
        setFlash("flashSuccess");
        setPressed("off");
        if (index < tagWords.length) {
            setSuccessScore(prevState => prevState + 1);
        }
        hideFlash();
    }

    function failureAction(e) {
        e.stopPropagation();
        showNextCard();
        setFlash("flashFailure");
        setPressed("off");
        if (index < tagWords.length) {
            setFailureScore(prevState => prevState + 1);
        }
        hideFlash();
    }

    function turnCard() {
        pressed === "off" ? setPressed("on") : setPressed("off");
    }

    function hideFlash() {
        setTimeout(() => {
            setFlash("off");
          }, 100);
    }

    return (
        <div className="cards">
            <div className="cards__part">
                <Field type='failure' score={failureScore} flash={flash}/>
                <Button className='card-btn' onClick={restartTraining}>restart</Button>
            </div>

            <Card pressed={pressed} tag={w.tags} index={index +1} length={tagWords.length} word={w.english} meaning={w.russian} transcription={w.transcription} failureAction={failureAction} successAction={successAction} restartTraining={restartTraining} successScore={successScore} failureScore={failureScore} onClick={turnCard}/>

            <div className="cards__part">
                <Field flash={flash} type='success' score={successScore}/>
                <Button className='card-btn' onClick={showPrevCard} disabled="true">back</Button>
            </div>  
        </div>
    )
}

export default Cards;
