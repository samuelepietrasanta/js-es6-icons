
//MILESTONE 1 
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.


let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//mostriamo in pagina tutte le icone disponibili come da layout.

let container = document.getElementById("layout_id");
mostraicone(icons , container)



// MILESTONE 2 
// Coloriamo le icone per tipo

console.log(getSpecificProperty(icons,"type"));












// FUNZIONI

function mostraicone(array , container){

    array.forEach((element) => {

        const {name, prefix , type , family} = element;

        container.innerHTML += 
        `<div> 
            <i class="${family} ${prefix}${name}"></i>
            <h4>${name}</h4>
        </div>`
    });

}

/**
 * La funzione ritorna in un array tutte le varianti della proprietà inserita -property-
 * che sono all'interno dell'array dato -array-.
 * 
 * @param array 
 * @param property 
 */
 function getSpecificProperty(array , property){
    const properties = [];

    array.forEach((element) =>{
        if (! properties.includes(element[property])){
            properties.push(element[property]);
        }

    return properties
    })

}