// https://uselessfacts.jsph.pl/random.json?language=en

//traer datos de la api cuando haga click a un botón
// const parrafo = document.createElement('p');
// document.body.appendChild(parrafo);
export const getDataApi = async () =>{
    try {

        const result = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
        const data = await result.json();

        // parrafo.innerText = data.text;
       //console.log(data);


        return data.text;

    } catch (error) {
        console.log(error);
    }
}

// const getDataApi = () =>{
//     fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
//         .then(response => response.json())
//         .then(data => console.log(data.text))
//         .catch(error => console.error(error))
// }

// getDataApi();

// const boton = document.createElement('button');
// boton.innerText="Trae datos de la API"
// document.body.appendChild(boton);

// boton.addEventListener('click', getDataApi);