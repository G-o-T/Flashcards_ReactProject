import React from "react";
import { Link } from "react-router-dom";

function Offer() {
    return (
        
        <main className="main margin35">
            <div className="offer">
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
                        <Link className='link-btn' to="/training">start training</Link>
                        <Link className='link-btn' to="/dictionary">dictionary</Link>
                    </div>
                </div>
                <div className="offer__cards">
                    <div className="offer__card offer__card_far">
                        <img src="./card-back-2.png" alt="Flashcard" className="offer__img" />
                    </div>
                    <div className="offer__card offer__card_near">
                        <div className="front">
                            <img className="offer__img center" src="./card-front.png" alt="Flashcard" />
                        </div>
                        <div className="back">
                            <img className="offer__img center" src="./card-back.png" alt="Flashcard" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Offer;