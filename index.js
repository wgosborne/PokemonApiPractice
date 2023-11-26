function createPokemonTable() {
    getSummaryResponse();
    const url = 'https://pokeapi.co/api/v2/pokemon'
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        console.log(json)
        displayPokemonTable(json)
    })
}

// function getSummaryResponse() {
//     const apiKey = "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";
//     const engineid = "text-davinci-002";
//     //const bookName = document.getElementById("titleInput").value;
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             prompt: "Please provide a 4 sentence summary of the book The Silent Patient", //+ bookName,
//             model: 'text-davinci-002',
//             temperature: 0.5,
//             max_tokens: 1000,
//             stop: ''
//         })
//     };

//     fetch('https://api.openai.com/v1/completions', requestOptions)
//         .then(response => response.json())
//         .then(data => {
//             const summary = data.choices[0].text;
//             console.log(summary);
//             //currBook.Summary = summary
//             //document.getElementById("summaryText").textContent =  summary ;


//         })
//         .catch(error => console.error(error));
// };

function getSummaryResponse() {
    const apiKey = "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";
    const engineid = "text-davinci-002";
    //const bookName = document.getElementById("titleInput").value;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: "Please provide a 4 sentence summary of the book The Silent Patient", //+ bookName,
            model: 'text-davinci-002',
            temperature: 0.5,
            max_tokens: 1000,
            stop: ''
        })
    };

    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
            const summary = data.choices[0].text;
            console.log(summary);
            //currBook.Summary = summary
            //document.getElementById("summaryText").textContent =  summary ;


        })
        .catch(error => console.error(error));
};


function displayPokemonTable(pokemonData){
    //console.log(pokemonData);
    const arr = pokemonData.results
    
    console.log(arr);
    
    let tableBody = document.getElementById('tableBody')

    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('th')
    th1.width = 100
    th1.appendChild(document.createTextNode('Name'))
    tr.appendChild(th1)

    let th2 = document.createElement('th')
    th2.width = 100
    th2.appendChild(document.createTextNode('Action'))
    tr.appendChild(th2)
    
    arr.forEach((pokemon) => {
        let tr = document.createElement('tr')
        tableBody.appendChild(tr)

        let td1 = document.createElement('td')
        td1.width = 100
        td1.className = 'text-capitalize'
        td1.appendChild(document.createTextNode(`${pokemon.name}`))
        tr.appendChild(td1)
        

        let td2 = document.createElement('td')
        td2.width = 100
        let button = document.createElement('button')
        button.className = 'btn btn-dark'
        button.textContent = 'View'
        td2.appendChild(button)
        button.addEventListener('click', function(){
            //location.assign(`/mis321-pa3-mcscott5/view.html#${pokemon.name}`)
            //location.assign(`/view.html#${pokemon.url}`)
            // window.location.href ="./view.html"
            localStorage.setItem('pokeurl', pokemon.url)
            location.assign(`./view.html#${pokemon.url}`)
            //handleViewClick(pokemon.url)
        })
        //td2.appendChild(document.createTextNode(`${pokemon.url}`))
        
        tr.appendChild(td2)

    })

}

function handleViewClick(url){
    // location.href(`/mis321-pa3-mcscott5/view.html#${url}`)
    // console.log(url);
    
    //let head = document.createElement('h1')
    
}
/*<tr>
<th scope="col">Name</th>
<th scope="col">Action</th>
</tr>
*/

function handleOnLoad(){
    createPokemonTable()
}



