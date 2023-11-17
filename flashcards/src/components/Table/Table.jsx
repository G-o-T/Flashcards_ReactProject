import WordRow from "../WordRow/WordRow";

function Table({sortedAndSearchedWords, removeWord, editWord, error}) {

    return (
        <div className="table">
            {sortedAndSearchedWords.length 
            ?
            <div className="table__container">
                {sortedAndSearchedWords.map(word => <WordRow remove={removeWord} data={word} key={word.id} edit={editWord} error={error}/>)}
            </div>
            :
            <div className="warning">There are no words in the dictionary yet</div>
            }
        </div>
    )
}

export default Table;