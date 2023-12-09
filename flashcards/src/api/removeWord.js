export const fetchRemoveWord = async (currentWord) => {
    await fetch( `api/words/${currentWord.id}/delete`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
    })
        .then(() => console.log('word was deleted'))
        .catch(error => console.log( `Error deleting word from server: ${error}` ));
}