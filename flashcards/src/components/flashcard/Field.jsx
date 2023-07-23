import React from "react";

function Field({type, score, ...props}) {
    return (
        <div className={type === 'failure' ? 'cards__field text-orange' : 'cards__field text-blue'}>
            {score}
        </div>
    )
}

export default Field;