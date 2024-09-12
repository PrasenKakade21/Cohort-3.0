const apiUrl = 'https://pokeapi.co/api/v2/type/';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data)
    updateCategory(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  const form = document.getElementById("pokemonForm");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectElement = document.getElementById('category');
    
    const selectedValue = selectElement.value;
    const numberofCards = document.getElementById("number").value;
    console.log('Selected value:', selectedValue,numberofCards);
    showCard(selectedValue,numberofCards);
    
  });

function updateCategory(data){

    data.results.forEach(cat => {

        const child = document.createElement("option");
        child.setAttribute("value",cat.url);
        child.innerText = cat.name;
        document.getElementById("category").appendChild(child);

    });
}
async function showCard(cat, n) {
    document.querySelector('button[type="submit"]').disabled  = true;
    try {

        const data = await getpokemons(cat, n);
        console.log(data)
        document.getElementById("pokemonCards").innerHTML = "";

        for (let i = 0; i < Math.min(n,data.length); i++) {
            const name = data[i].pokemon.name;
            const url = data[i].pokemon.url;
            console.log(name,url); 
            const imgurl = await getImage(url);
            const card = createCard(imgurl,name);
            document.getElementById("pokemonCards").appendChild(card);
        }
        
    } catch (error) {
        console.error('Error in showCard:', error);
    }
    finally{
        document.querySelector('button[type="submit"]').disabled  = false;

    }
}

async function getpokemons(cat, n) {
    try {
        const response = await fetch(cat);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        
        const data = await response.json();
        console.log(data.pokemon); 
        return data.pokemon; 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
    }
}

async function getImage(url) {

    try {
        
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await resp.json();
        console.log(data.sprites.front_default); 
        return data.sprites.front_default; 

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
    }
    
}
function createCard(imga, name) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imga;
    img.className = 'card-image';

    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.className = 'card-name';

    card.appendChild(img);
    card.appendChild(h2);

    return card;
}
