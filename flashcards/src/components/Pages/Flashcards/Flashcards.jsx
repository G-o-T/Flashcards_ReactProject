import React from "react";
import Title from "../../UI/Title/Title";
// import Tags from "../../Tags/Tags";
import Cards from "../../Cards/Cards";

function Flashcards() {
    return (
        <main className="main">
            <div className="flashcards margin38">
                <Title title="flashcards"/>
                {/* <Tags /> */}
                <Cards />
            </div>
        </main>
    )
}

export default Flashcards;