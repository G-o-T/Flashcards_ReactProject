import React from "react";
import Title from "../Title";
import Tags from "./Tags";
import Cards from "./Cards";

function Flashcards() {
    return (
        <main className="flashcards">
            <Title title="flashcards"/>
            <Tags />
            <Cards />
        </main>
    )
}

export default Flashcards;