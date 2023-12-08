export const fetchWords = async () => {
    // setIsLoading(true);

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
        // setIsLoading(false);
    }
}