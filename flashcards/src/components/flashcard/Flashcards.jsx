import React from "react";
import Title from "../Title";
import Tags from "./Tags";
import Cards from "./Cards";

function Flashcards() {
    return (
        <main className="main">
            <div className="flashcards margin38">
                <Title title="flashcards"/>
                <Tags />
                <Cards />
            </div>
        </main>
    )
}

export default Flashcards;