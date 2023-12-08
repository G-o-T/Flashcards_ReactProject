export const fetchNewWord = (newWord) => {
    fetch( `api/words/add`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify( newWord ),
    })
        .then(() => console.log('word was added'))
        .catch(error => console.log( `Error sending word to server: ${error}` ));
}