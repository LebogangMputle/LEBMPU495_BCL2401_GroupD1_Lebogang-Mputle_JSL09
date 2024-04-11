//Using fetch

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(Response => Response.json())
    .then(data => console.log(data))        //using this  j.son data you can access a lot of info, including the name, height etc...
    .catch(error => console.error(error));

//Using asynch/await

fetchData();

async function fetchData(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
    }
    
    const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(data);
    }
