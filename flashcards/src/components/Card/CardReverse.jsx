import React from "react";


function CardReverse({tag, index, length, meaning}) {

    return (

                <div className="card__field card__field_reverse">
                    <div className="card__add-info">
                        <div className="card__tag">
                            {'#'+ tag}
                        </div>
                        <div className="card__number">
                            {index+' / '+length}
                        </div>
                    </div>
                    <div className="card__content-container">
                        <div className="card__content">
                            <div className="card__trans">{meaning}</div>
                        </div>
                    </div>
                </div>
    )
}

export default CardReverse;