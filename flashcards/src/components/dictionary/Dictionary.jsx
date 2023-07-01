import React from "react";
import Title from "../Title";
import WordsList from "./WordsList";

function Dictionary() {

    return (
        <main className="dictionary">
            <Title title="dictionary"/>
            <div className="table">
                <div className="table__container">
                    <WordsList />
                </div>
            </div>
        </main>
    )

}

export default Dictionary;


// : <div className="warning">There are no words in the dictionary yet</div>