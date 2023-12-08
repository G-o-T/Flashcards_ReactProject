export const fetchEditWord = async (updatedWord) => {
    fetch( `api/words/${updatedWord.id}/update`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify( updatedWord ),
    })
        .then(() => console.log('word was changed'))
        // .catch( e => setError(e, e.message=`Error sending word to server: ${e}`));
}