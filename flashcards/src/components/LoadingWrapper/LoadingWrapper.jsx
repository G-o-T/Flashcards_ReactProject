// import FetchError from "../UI/FetchError/FetchError";
import { loadingStore } from "../../stores/LoadingStore";
import { wordsStore } from "../../stores/WordsStore";
import Loading from "../UI/Loading/Loading";


function LoadingWrapper({children}) {
    // const [error, setError] = useState(null);

    // const isLoading = loadingStore.isLoading;
    // console.log(isLoading);

    // // const words = [{"id":"14985","english":"work","transcription":"work","russian":"Работа","tags":"существительное","tags_json":"[\"u0441u0443u0449u0435u0441u0442u0432u0438u0442u0435u043bu044cu043du043eu0435\"]"}];

    // const words = wordsStore.words;
    // console.log(words);


    return (
    <>
        {loadingStore.isLoading && <Loading />}
        {/* {error && <FetchError error={error} />} */}
        {(loadingStore.isLoading === false && wordsStore.words.length>0) && children}
    </>
    )
  
}

export default LoadingWrapper;
