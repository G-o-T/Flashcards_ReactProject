import React from "react";
import Button from "../Button";

function Card(props) {
    return (
        <div className="card">
            <div className="card__field card__field_obverse">
                <div className="card__add-info">
                    <div className="card__tag">
                        {'#'+props.tag}
                    </div>
                    <div className="card__number">
                        {props.index+' / '+props.length}
                    </div>
                </div>
                <div className="card__content-container">
                    <div className="card__content">
                        <div className="card__desc">{props.word}</div>
                        <div className="card__trans">{props.transcription}</div>
                    </div>
                </div>
            </div>
            {/* <div className="card__field card__field_reverse">
                <div className="card__add-info">
                    <div className="card__tag">
                        {'#'+props.tag}
                    </div>
                    <div className="card__number">
                        {props.index+' / '+props.length}
                    </div>
                </div>
                <div className="card__content-container">
                    <div className="card__content">
                        <div className="card__trans">{props.meaning}</div>
                    </div>
                </div>
            </div> */}
            <div className="card__btns">
                <Button className='card__btn card__btn_failure text-orange'>don’t know</Button>
                <Button className='card__btn card__btn_success text-blue'>know</Button>
            </div>
        </div>
    )
}

export default Card;