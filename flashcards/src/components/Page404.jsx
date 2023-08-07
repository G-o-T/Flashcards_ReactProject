import React from "react";
import Card from "./flashcard/CardObverse";
import { Link } from "react-router-dom";
import Button from "./Button";

function Page404() {
    return (
        <main className="main margin35">
            <div className="card">
                <Card tag='ops' index='0' length='0' word='404' meaning='page not found' transcription='[something went wrong]'/>
                <div className="card__btns">
                    <Button className='card__btn card__btn_failure text-orange'><Link to="/dictionary">dictionary</Link></Button>
                    <Button className='card__btn card__btn_success text-blue'><Link to="/flashcards">flashcards</Link></Button>
                </div>

            </div>
        </main>
    )
}

export default Page404;