import React from "react";

function CardObverse({tag, index, length, word, transcription}) {

    return (

        <>
            <div className="card__field card__field_obverse">
                <div className="card__add-info">
                    <div className="card__tag">
                        {'#'+tag}
                    </div>
                    <div className="card__number">
                        {index+' / '+ length}
                    </div>
                </div>
                <div className="card__content-container">
                    <div className="card__content">
                        <div className="card__desc">{word}</div>
                        <div className="card__trans">{transcription}</div>
                    </div>
                </div>
            </div>
        </>        
        
    )
}

export default CardObverse;