import React from "react";
import WordRow from "./WordRow";
import { wordsData } from "../../testData";

// Для построения перечня слов в Словаре
function WordsList() {

    // const wordsData = [];


    return (
        wordsData.map(wordData => <WordRow data={wordData} key={wordData.id}/>)
    )

}

export default WordsList;