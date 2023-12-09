import WordRow from "../WordRow/WordRow";

function Table({sortedAndSearchedWords}) {


    return (
        <div className="table">
            {sortedAndSearchedWords.length 
            ?
            <div className="table__container">
                {sortedAndSearchedWords.map(word => <WordRow data={word} key={word.id}/>)}
            </div>
            :
            <div className="warning">There are no words in the dictionary yet</div>
            }
        </div>
    )
}

export default Table;