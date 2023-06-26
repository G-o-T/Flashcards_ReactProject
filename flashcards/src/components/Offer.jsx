import React from "react";
import Button from "./Button";

function Offer() {
    return (
        <main className="offer">
            <div className="offer__desc">
                <h1 className="offer__title">
                    <div className="offer__row">
                        <p className="offer_text text-orange">learn</p>
                        <p className="offer_text text-white">language</p>
                    </div>
                    <div className="offer__row">
                        <p className="offer_text text-blue">by</p>
                        <p className="offer_text text-magenta">flashcards</p>
                    </div>
                </h1>
                <div className="offer__btns">
                    <Button text="start training"></Button>
                    <Button text="dictionary"></Button>
                </div>
            </div>
            <div className="offer__img">
                <p>тут приличная картинка с переворачивающейся карточкой</p>
            </div>
        </main>
    )
}

export default Offer;