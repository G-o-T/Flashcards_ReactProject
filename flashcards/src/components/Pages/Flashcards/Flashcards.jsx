import React from "react";
import Title from "../../UI/Title/Title";
import Tags from "../../Tags/Tags";
import Cards from "../../Cards/Cards";
import Words from "../../Words/Words";

function Flashcards() {
    
    return (
        <main className="main">
            <Words>
                <div className="flashcards margin38">
                    <Title title="flashcards"/>
                    <Tags />
                    <Cards />
                </div>
            </Words>
        </main>
    )
}

export default Flashcards;