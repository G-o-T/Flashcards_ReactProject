import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useInput } from "../../hooks/validationHooks";
import Error from "../UI/Error/Error";



// const useValidation = (value, validations) => {

//     const [isEmptyError, setEmptyError] = useState(true);
//     const [latinError, setLatinError] = useState(true);
//     const [cyrillicError, setCyrillicError] = useState(true);
//     const [inputValidError, setInputValidError] = useState(true);
    
//     useEffect(() => {

//         const latinRegEx = /^[a-zA-Z0-9]+$/g;
//         const cyrillicRedEx = /^[а-яА-ЯёЁ0-9]+$/g;

//         for (const validation in validations) {
//             switch (validation) {
//                 case 'isEmptyError':
//                     value ? setEmptyError(false) : setEmptyError(true)
//                     break;
//                 case 'latinError':
//                     latinRegEx.test(String(value).toLowerCase()) ? setLatinError(false) : setLatinError(true);
//                     break;
//                 case 'cyrillicError':
//                     cyrillicRedEx.test(String(value).toLowerCase()) ? setCyrillicError(false) : setCyrillicError(true)
//                     break;
//             }
//         }

//     }, [value])

//     useEffect(() => {

//         for (const validation in validations) {
//             switch (validation) {
//                 case 'isEmptyError':
//                     isEmptyError ? setInputValidError(true) : setInputValidError(false);
//                     break;
//                 case 'latinError':
//                     latinError ? setInputValidError(true) : setInputValidError(false);                  
//                     break;
//                 case 'cyrillicError':
//                     cyrillicError ? setInputValidError(true) : setInputValidError(false);
//                     break;
//             }
//         }

//     }, [isEmptyError, latinError, cyrillicError])

//     return {
//         isEmptyError, 
//         latinError, 
//         cyrillicError,
//         inputValidError,
//     }
// }

// const useInput = (initialValue, validations) => {
//     const [value, setValue] = useState(initialValue);
//     const [isAttended, setAttended] = useState(false);
//     const valid = useValidation(value, validations);

//     const onChange = (e) => {
//         setValue(e.target.value)
//     }

//     const onBlur = () => {
//         setAttended(true) 
//     }

//     const clearInput = () => {
//         setValue('');
//         setAttended(false);
//     }

//     return {
//         value,
//         onChange,
//         onBlur,
//         clearInput,
//         isAttended,
//         ...valid,
//     }


// }

function Form({create}) {

    const english = useInput('', {isEmptyError: true, latinError: true});
    const russian = useInput('', {isEmptyError: true, cyrillicError: true});
    const transcription = useInput('', {isEmptyError: true});
    const tags = useInput('', {isEmptyError: true});

    const addWord = (e) => {
        e.preventDefault();

        const newWord = {
            id: Date.now(),
            english: english.value,
            russian: russian.value,
            transcription: "[" + transcription.value + "]",
            tags: tags.value,
        }

        create(newWord);

        english.clearInput();
        russian.clearInput();
        transcription.clearInput();
        tags.clearInput();

    }

    const handleClick = (e) => {
        addWord(e);
    }

    const englishErrorField = english.isAttended && (english.latinError || english.isEmptyError);
    const russianErrorField = russian.isAttended && (russian.cyrillicError || russian.isEmptyError);
    const transcriptionErrorField = transcription.isAttended && transcription.isEmptyError;
    const tagsErrorField = tags.isAttended && tags.isEmptyError;

    // const erroredFields = [englishErrorField, russianErrorField, transcriptionErrorField, tagsErrorField];
    // const errorTexts = [english.errorText, russian.errorText, transcription.errorText, tags.errorText];

    return (
        <>
            <form className="form">
                <div className="form__block">
                    <Input 
                        placeholder="word"
                        value={english.value}
                        name='english'
                        onChange={e => english.onChange(e)}
                        onBlur={e => english.onBlur(e)}
                        className={english.isAttended && english.inputValidError ? "input input__error" : "input" }
                    />
                    {englishErrorField ? <Error error={english.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="meaning"
                        value={russian.value}
                        name='russian'
                        onChange={e => russian.onChange(e)}
                        onBlur={e => russian.onBlur(e)}
                        className={russian.isAttended && russian.inputValidError ? "input input__error" : "input" }
                    />
                    {russianErrorField ? <Error error={russian.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="transcription"
                        value={transcription.value}
                        name='transcription'
                        onChange={e => transcription.onChange(e)}
                        onBlur={e => transcription.onBlur(e)}
                        className={transcription.isAttended && transcription.inputValidError ? "input input__error" : "input" }
                    />
                    {transcriptionErrorField ? <Error error={transcription.errorText}/> : <></>}
                </div>
                <div className="form__block">
                    <Input 
                        placeholder="topic"
                        value={tags.value}
                        name='tags'
                        onChange={e => tags.onChange(e)}
                        onBlur={e => tags.onBlur(e)}
                        className={tags.isAttended && tags.inputValidError ? "input input__error" : "input" }
                    />
                    {tagsErrorField ? <Error error={tags.errorText}/> : <></>}

                </div>
                <Button onClick={handleClick} className='btn' disabled={english.inputValidError || russian.inputValidError || transcription.inputValidError || tags.inputValidError}>add word</Button>
            </form>


        </>

    )
}

export default Form;