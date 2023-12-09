export const fetchEditWord = async (updatedWord) => {
    await fetch( `api/words/${updatedWord.id}/update`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify( updatedWord ),
    })
        .then(() => console.log('word was changed'))
        .catch( e => console.log( `Error sending word to server: ${e}` ));
}