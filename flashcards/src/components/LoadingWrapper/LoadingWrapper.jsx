// import FetchError from "../UI/FetchError/FetchError";
import { loadingStore } from "../../stores/LoadingStore";
import { wordsStore } from "../../stores/WordsStore";
import Loading from "../UI/Loading/Loading";


function LoadingWrapper({children}) {
    // const [error, setError] = useState(null);

    // const isLoading = loadingStore.isLoading;
    // console.log(isLoading);

    console.log(loadingStore.isLoading);

    return (
    <>
        {loadingStore.isLoading && <Loading />}
        {/* {error && <FetchError error={error} />} */}
        {(loadingStore.isLoading === false && wordsStore.words.length>0) && children}
    </>
    )
  
}

export default LoadingWrapper;
