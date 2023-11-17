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

                if (!response.ok) {
                    throw new Error('Server is down. Please try again')
                }           

                const words = await response.json();
                setWords(words);

            } catch (err) {
                // console.log(err.message);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWords();

    }, []);

    return (
    <WordsContext.Provider value={words}>
        {isLoading && <Loading />}
        {error && <FetchError error={error} />}
        {(!isLoading && words.length>0) && children}
    </WordsContext.Provider>
    )
  
}

export default Words;