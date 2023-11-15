import { useEffect, useState } from "react";
import FetchError from "../UI/FetchError/FetchError";
import Loading from "../UI/Loading/Loading";
import { WordsContext } from "../Context/WordsContext";

function Words({children}) {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{ 
        const fetchWords = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('/api/words');     
                const words = await response.json();
                setWords(words);
            } catch (e) {
                setError(e, e.message="Something went wrong. Please try again");
                console.log(e.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWords();
  }, []);

  return (

    <>
    <WordsContext.Provider value={words}>
        {isLoading && <Loading />} 
        {/* {error && <FetchError error={error.message} />} */}
        {error && <div>{error.message}</div>}
        {/* <ul>
            {
                words.map(word => {
                    return <li key={word.id}>{word.english} - {word.russian} - {word.transcription}- {word.tags}</li>
                })
            }
        </ul> */}
        {(!error && !isLoading) && children}
    </WordsContext.Provider>
    </>)
  
}

export default Words;