import React, { useState, useEffect } from "react";
import Title from "../../UI/Title/Title";
// import Tags from "../../Tags/Tags";
import Cards from "../../Cards/Cards";
import Loading from "../../UI/Loading/Loading";
import { wordsStore } from "../../../stores/WordsStore";

function Flashcards() {

    useEffect(() => {
        wordsStore.loadWords();
    }, []);


    const [showCards, setShowCards] = useState(false);

    setTimeout(() => {
        setShowCards(true)
    }, 800);

    return (
        <main className="main">
                <div className="flashcards margin38">
                    <Title title="flashcards"/>
                    {/* <Tags /> */}
                    {showCards ? <Cards /> : <Loading/>}
                </div>
        </main>
    )
}

export default Flashcards;