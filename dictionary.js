

const handleSearch = () => {
    const inputValue = document.getElementById('input-value').value;
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        document.getElementById('input-value').value = ''; // To clear search field after data load.
        console.log(data);
    })
}