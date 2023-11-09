import { useState, useEffect } from "react";

const useValidation = (value, validations) => {

    const [isEmptyError, setEmptyError] = useState(true);
    const [latinError, setLatinError] = useState(true);
    const [cyrillicError, setCyrillicError] = useState(true);
    const [inputValidError, setInputValidError] = useState(true);
    const [errorText, setErrorText] = useState("");
    
    useEffect(() => {

        const latinRegEx = /^[a-zA-Z0-9]+$/g;
        const cyrillicRedEx = /^[а-яА-ЯёЁ0-9]+$/g;

        for (const validation in validations) {
            switch (validation) {
                case 'isEmptyError':
                    value.trim() ? setEmptyError(false) : setEmptyError(true);
                    break;
                case 'latinError':
                    latinRegEx.test(String(value).toLowerCase()) ? setLatinError(false) : setLatinError(true);
                    break;
                case 'cyrillicError':
                    cyrillicRedEx.test(String(value).toLowerCase()) ? setCyrillicError(false) : setCyrillicError(true)
                    break;
            }
        }

    }, [value])

    useEffect(() => {

        const errorTexts = [
            {
                id: 0,
                text: "The field cannot be empty"
            },
            {
                id: 1,
                text: "The word must be written in Latin"
            },
            {
                id: 2,
                text: "The meaning must be written in Cyrillic"
            }
        ]

        for (const validation in validations) {
            switch (validation) {
                case 'isEmptyError':
                    isEmptyError ? setInputValidError(true) : setInputValidError(false);
                    isEmptyError ? setErrorText([errorTexts[0]]) : setErrorText([]);
                    break;
                case 'latinError':
                    latinError ? setInputValidError(true) : setInputValidError(false);
                    latinError ? setErrorText(prev => [...prev, errorTexts[1]]) : setErrorText([]);                    
                    break;
                case 'cyrillicError':
                    cyrillicError ? setInputValidError(true) : setInputValidError(false);
                    cyrillicError ? setErrorText(prev => [...prev, errorTexts[2]]) : setErrorText([]); 
                    break;
            }
        }

    }, [isEmptyError, latinError, cyrillicError])

    return {
        isEmptyError, 
        latinError, 
        cyrillicError,
        inputValidError,
        errorText,
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isAttended, setAttended] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onCancel = (oldValue) => {
        setValue(oldValue)
    }

    const onBlur = () => {
        setAttended(true) 
    }

    const clearInput = () => {
        setValue('');
        setAttended(false);
    }

    return {
        value,
        onChange,
        onBlur,
        clearInput,
        isAttended,
        ...valid,
        onCancel
    }
}

