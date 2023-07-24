import React from "react";
import Card from "./flashcard/Card";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <main className="main margin35">
            <Card tag='ops' index='0' length='0' word='404' meaning='page not found' transcription='[something went wrong]' btnLeft={<Link to="/dictionary">dictionary</Link>} btnRight={<Link to="/flashcards">flashcards</Link>}/>
        </main>
    )
}

export default Page404;