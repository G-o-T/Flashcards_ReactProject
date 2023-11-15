import React, { useState, useRef, useContext } from "react";
import Field from "../Field/Field";
import Button from "../UI/Button/Button";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { WordsContext } from "../Context/WordsContext";

function Cards() {
    const [index, setIndex] = useState(0);
    const [successScore, setSuccessScore] = useState(0);
    const [failureScore, setFailureScore] = useState(0);
    const [showBack, setShowBack] = useState(true);
    const [flash, setFlash] = useState("off");

    //Для задания 27 недели. Показывает "сколько слов изучено за одну тренировку"
    const learnedWord = useRef(0);

    let tagWords = useContext(WordsContext);
    let w = tagWords[index];

    //Показывает следующую карточку
    function showNextCard() {
        setIndex(prevState => prevState + 1);
    }

    //Будет показывать предыдущую карточку, пока не допилена
    function showPrevCard() {
        if (index > 0) {
            setIndex(prevState => prevState - 1);
        }
    }

    //Перезапускает тренировку
    function restartTraining() {
        setIndex(0); 
        setShowBack(true);
        setSuccessScore(0);
        setFailureScore(0); 
    }

    //Отображает новую карточку и увеличивает количество запомненных слов
    function successAction(e) {
        e.stopPropagation();
        showNextCard();
        setFlash("flashSuccess");
        setShowBack(true);
        if (index < tagWords.length) {
            setSuccessScore(prevState => prevState + 1);
        }
        hideFlash();
    }

    //Отображает новую карточку и увеличивает количество еще не выученных слов
    function failureAction(e) {
        e.stopPropagation();
        showNextCard();
        setFlash("flashFailure");
        setShowBack(true);
        if (index < tagWords.length) {
            setFailureScore(prevState => prevState + 1);
        }
        hideFlash();
    }

    //Переворачивает карточку и показывает "сколько слов изучено за одну тренировку". Изучено скорее всего в значении "просмотрено, ознакомлено"
    function turnCard() {
        setShowBack((v) => !v);
        learnedWord.current++;
    }

    //Убирает вспышку, свидетельствующую об увеличении количества запомненных/еще не выученных слов 
    function hideFlash() {
        setTimeout(() => {
            setFlash("off");
          }, 200);
    }

    const resultFeedback = [
        {
            word: 'Work on yourself',
            meaning: 'The roots of education are bitter, but the fruit is sweet',
        },
        {
            word: 'Believe in yourself',
            meaning: 'Studying is not about time. It’s about effort',
        },
        {
            word: 'Well done',
            meaning: 'Enjoy the opportunity to continually grow',
        },
        {
            word: 'Perfectly well',
            meaning: 'Follow the dream',
        }
    ]

    function setFeedBackWord() {
        let feedback;
        const success = successScore / tagWords.length * 100;
        if (success < 40) {
            feedback = resultFeedback[0].word;
        } else if (success < 60) {
            feedback = resultFeedback[1].word;
        } else if (success < 90) {
            feedback = resultFeedback[2].word;
        } else {
            feedback = resultFeedback[3].word;
        }
        return feedback;
    }

    function setFeedBackTranscription() {
        let feedback;
        const success = successScore / tagWords.length * 100;
        if (success < 40) {
            feedback = resultFeedback[0].meaning;
        } else if (success < 60) {
            feedback = resultFeedback[1].meaning;
        } else if (success < 90) {
            feedback = resultFeedback[2].meaning;
        } else {
            feedback = resultFeedback[3].meaning;
        }
        return feedback;
    }

    return (
        <div className="cards">
            <div className="cards__part">
                <Field type='failure' score={failureScore} flash={flash}/>
                <Button className='card-btn' onClick={restartTraining}>restart</Button>
            </div>
            {index < tagWords.length
                ?
                <>
                    <Card showBack={showBack} tag={w.tags} index={index+1} length={tagWords.length} word={w.english} meaning={w.russian} transcription={w.transcription} failureAction={failureAction} successAction={successAction} restartTraining={restartTraining} successScore={successScore} failureScore={failureScore} onClick={turnCard} btnLeftTitle="don't know" btnRightTitle='know' btnLeftAction={failureAction} btnRightAction={successAction}/>
                </>
                :
                <>
                    <Card showBack={showBack} tag="good_job" index={successScore} length={tagWords.length} word={setFeedBackWord()} transcription={`You have learnt ${successScore} of ${successScore+failureScore}`} meaning={setFeedBackTranscription()} failureAction={failureAction} successAction={successAction} restartTraining={restartTraining} successScore={successScore} failureScore={failureScore} onClick={turnCard} btnLeftTitle='start again' btnRightTitle={<Link to="/training">new topic</Link>} btnLeftAction={restartTraining}/>
                </>
            }
            <div className="cards__part">
                <Field flash={flash} type='success' score={successScore}/>
                <Button className='card-btn' onClick={showPrevCard} disabled={true}>back</Button>
            </div>  
        </div>
    )
}

export default Cards;
