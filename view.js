let infoUrl= localStorage.getItem('pokeurl')
console.log(infoUrl)

function getPokemonInfo() {
    const url = infoUrl
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        console.log(json)
        displayPokemonInfo(json)
    })
}

function handleBack(){
    location.assign('./index.html')
}

function displayPokemonInfo(pokemonInfo) {
    // console.log(pokemonInfo.abilities);
    // console.log(pokemonInfo.base_experience);
    let infobody = document.getElementById('infoBody')
    let bigBody = document.getElementById('bigBody')

    
    let abilityList = pokemonInfo.abilities
    let abs = ''
    abilityList.forEach((a) => {
        abs += `<p class="text-capitalize">${a.ability.name}<p>`

    })

    let typeList = pokemonInfo.types
    let types = ''
    typeList.forEach((t) => {
        types += `<p class="text-capitalize">${t.type.name}<p>`
    })

   let pokemonCard = ''
   pokemonCard += `<div class="card text-center">
   <img src="${pokemonInfo.sprites.front_default}" class="card-img-top">
   <div class="card-body">
     <h5 class="card-title text-capitalize fs-3">${pokemonInfo.name}</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item"><h5>Abilities:</h5> ${abs}</li>
     <li class="list-group-item"><h5>Type(s):</h5> ${types}</li>
     <li class="list-group-item">Height: ${pokemonInfo.height}<br> Weight ${pokemonInfo.weight}</li>
     <li class="list-group-item"><button class="btn btn-dark" onClick={handleBack()}>Back</button></li>
   </ul>
 </div>`

 
 let type = pokemonInfo.types[0].type.name
    console.log(type);
    if (type === 'grass'){
        bigBody.style = 'background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));'
    } else if (type === 'fire'){
        bigBody.style = 'background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);'
    } else if (type === 'water'){
        bigBody.style = 'background: radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);'
    } else if (type === 'bug'){
        bigBody.style = 'background: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);'
    } else if (type === 'normal'){
        bigBody.style = 'background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);'
    } 

 infobody.innerHTML = pokemonCard
    


    // let pokemonName = document.createElement('div')
    // pokemonName.textContent = `Name: ${pokemonInfo.name}`
    // let type = pokemonInfo.types[0].type.name
    // console.log(type);
    // if (type === 'grass'){
    //     pokemonName.className = 'p-3 text-capitalize fs-3 bg-success bg-opacity-10 border border-start border-success rounded-end'
    // } else if (type === 'fire'){
    //     pokemonName.className = 'p-3 text-capitalize fs-3 bg-danger bg-opacity-10 border border-start border-danger rounded-end'
    // } else if (type === 'water'){
    //     pokemonName.className = 'p-3 text-capitalize fs-3 bg-info bg-opacity-10 border border-start border-info rounded-end'
    // } else if (type === 'bug'){
    //     pokemonName.className = 'p-3 text-capitalize fs-3 bg-warning bg-opacity-10 border border-start border-warning rounded-end'
    // } else if (type === 'normal'){
    //     pokemonName.className = 'p-3 text-capitalize fs-3 bg-secondary bg-opacity-10 border border-start border-secondary rounded-end'
    // } 

    // infobody.appendChild(pokemonName)

    // let pokemonPic = document.createElement('img')
    // pokemonPic.src = `${pokemonInfo.sprites.front_default}`
    // pokemonPic.className = 'img-thumbnail'
    // infobody.appendChild(pokemonPic)

    // let pokemonPic = document.createElement('img')
    // pokemonPic.src = `${pokemonInfo.sprites.front_default}`
    // pokemonPic.className = 'card-img-top'
    // card.appendChild(pokemonPic)

    // let cardBody = document.createElement('div')
    // cardBody.className = 'card-body'
    // let cardTitle = document.createElement('h5')
    // cardTitle.textContent = pokemonInfo.name
    // card.appendChild(cardBody)
    // infobody.appendChild(card)

    // let pokemonAbilities = document.createElement('div')
    // let abilityList = pokemonInfo.abilities
    // let abs = `<h4>Abilities: <h4>`
    // abilityList.forEach((a) => {
    //     abs += `<p>${a.ability.name}<p>`
    // })
    // pokemonAbilities.innerHTML = abs
    // //pokemonAbilities.textContent = `${pokemonInfo.abilities[0].ability.name}`
    // infobody.appendChild(pokemonAbilities)
    
//     <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
//   Dangerous heading
// </div>

// <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
//   Changing border color and width
// </div>

}

getPokemonInfo()
