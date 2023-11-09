import React from "react";

function Field({type, score, flash}) {

    function setClassName() {
        let className = '';
        
        if (flash === 'flashFailure' && type === 'failure') {
            className = 'cards__flash';
        } else if (flash === 'flashSuccess' && type === 'success') {
            className = 'cards__flash';
        } 
        
        return className;
    }




    return (
        <div className={setClassName()}>
            <div className={type === 'failure' ? 'cards__field text-orange' : 'cards__field text-blue'}>
                {score}
            </div>
                
        </div>
    )
}

export default Field;
