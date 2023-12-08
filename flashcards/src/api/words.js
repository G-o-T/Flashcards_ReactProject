import { loadingStore } from "../stores/LoadingStore";

export const fetchWords = async () => {
    loadingStore.setLoading(true);

    try {
        const response = await fetch('/api/words');

        if (!response.ok) {
            throw new Error('Server is down. Please try again')
        }           

        const words = await response.json();
        return words;

    } catch (err) {
        console.log(err.message);
        // setError(err.message);
    } finally {
        loadingStore.setLoading(false);
    }
}