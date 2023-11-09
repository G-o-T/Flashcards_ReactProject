import React from "react";
import { wordsData } from "../../testData";
import Button from "../UI/Button/Button";
import Tag from "../Tag/Tag";

function Tags() {
    const tags = [...new Set(wordsData.map(wordData => wordData.tags))];

    return (
        <div className="tags">
            {tags.length 
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