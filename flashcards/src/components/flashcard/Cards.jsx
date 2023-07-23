import React from "react";
import Field from "./Field";
import Card from "./Card";
import Button from "../Button";
import { wordsData } from "../../testData";



function Cards() {
    const w = wordsData;

    return (
        <div className="cards">
            <div className="cards__part">
                <Field type='failure' score='0'/>
                <Button className='card-btn'>restart</Button>
            </div>     
            <Card tag={w[0].tags} index='1' length={w.length} word={w[0].english} meaning={w[0].russian} transcription={w[0].transcription} btnLeft="don't know" btnRight="know" />
            <div className="cards__part">
                <Field type='success' score='0'/>
                <Button className='card-btn'>shuffle</Button>
            </div>  
        </div>
    )
}

export default Cards;