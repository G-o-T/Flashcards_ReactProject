import React, { useContext} from "react";
// import { wordsData } from "../../testData";
import Button from "../UI/Button/Button";
import Tag from "../Tag/Tag";
import { WordsContext } from "../Context/WordsContext";

function Tags() {
    const wordsData = useContext(WordsContext);
    const tags = [...new Set(wordsData.map(wordData => wordData.tags ? wordData.tags : 'the topic not specified'))]

    return (
        <div className="tags">
            {tags.length !== 0
                ? 
                <>
                <div className="tags__container">
                    {tags.map(t => <Tag key={t} title={t}/>)}
                    <Tag title='all'/>
                </div>
                <Button className='btn'>start training</Button>
                </>
                :
                <div className="tags__error">
                    <div className="warning">There are no words in the dictionary yet</div>
                    <Button className='btn'>add words</Button>
                </div>
            }


            {/* <div className="tags__container">
                {tags.length 
                    ? 
                    <div className="tags">
                        {sortedAndSearchedWords.map(word => <WordRow remove={removeWord} data={word} key={word.id}/>)}
                    </div>
                    :
                    <div className="warning">There are no words in the dictionary yet</div>
                }
            </div> */}
        </div>
    )
}

export default Tags;