import React, { useState } from "react";
import CardObverse from "./flashcard/CardObverse";
import CardReverse from "./flashcard/CardReverse";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";


function Page404() {

    const [showBack, setShowBack] = useState(true);

    return (
        <main className="main margin35">
            <div className="card">
                <CSSTransition
                    in={showBack}
                    timeout={300}
                    classNames='flip'
                >
                    <button className="card__field-container" onClick={() => setShowBack((v) => !v)}>
                        <>
                            <CardObverse tag='ops' index='0' length='0' word='404' transcription='[something went wrong]'/>
                            <CardReverse tag='ops' index='0' length='0' meaning='page not found'/>
                        </>
                    </button>
                </CSSTransition>

                <div className="card__btns">
                    <Button className='card__btn card__btn_failure text-orange'><Link to="/dictionary">dictionary</Link></Button>
                    <Button className='card__btn card__btn_success text-blue'><Link to="/training">flashcards</Link></Button>
                </div>
            </div>
        </main>
    )
}

export default Page404;