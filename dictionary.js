

const handleSearch = () => {
    const inputValue = document.getElementById('input-value').value;
    if (inputValue) {
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                document.getElementById('input-value').value = ''; // To clear search field after data load.

                // Validaton for incurrect search
                if(data.title === 'No Definitions Found'){
                    alert(data.message);
                }
                else{
                    displayResults(data);
                }
            })
    }
    else{
        alert('Please enter the word first')
    }
}


const displayResults = (data) =>{
    const parent = document.getElementById('audio-container');
    parent.innerHTML = '';
    var x = document.getElementById("myAudio");
    // console.log(data[0].phonetics);
    data[0].phonetics.forEach(element => {
        // console.log(element);
        const audio = document.createElement('audio');
        audio.src = element.audio;

        const button = document.createElement('button');
        button.innerText = 'paly';
        button.onclick = () => {
            audio.play();
        }

        const divConatinerr = document.createElement('div');
        divConatinerr.appendChild(audio);
        divConatinerr.appendChild(button);


        parent.appendChild(divConatinerr);
    });
    console.log(parent);
}

 
 