
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



const colors = ['blue', 'magenta', 'yellow']

const iconecolorate = colorizedItems(icons, colors)

let container = document.getElementById("layout_id");
mostraicone(iconecolorate , container)

 let types = getSpecificProperty(icons, 'type');

 let select = document.getElementById('my_select');

 addOption(types , select) ;


 select.addEventListener('change', () => {
    const selectedValue = select.value;
    console.log(selectedValue);

    const filteredIcons = filteredElements(icons , selectedValue);

    mostraicone(filteredIcons , container)
 })









// FUNZIONI

function mostraicone(array , container){


    let temporaryHTML = '';

    array.forEach((element) => {

        const {name, prefix , type , family, color} = element;

        temporaryHTML += 
        `<div> 
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <h4>${name}</h4>
        </div>`
    });

    container.innerHTML = temporaryHTML;

}

/**
 * La funzione ritorna in un array tutte le varianti della propriet?? inserita -property-
 * che sono all'interno dell'array dato -array-.
 * 
 * @param array 
 * @param property 
 */
 function getSpecificProperty(array , property){

    const properties = [];

    array.forEach((element) =>{
        if (!properties.includes(element[property])){
            properties.push(element[property]);
        }

    
    })
    return properties

}



// MILESTONE 2 
// Coloriamo le icone per tipo

function colorizedItems(array, colors) {
    const types = getSpecificProperty(icons, "type");
    const colorizedArray = array.map((element) =>{
        const indexOfType = types.indexOf(element.type);

        if( indexOfType !== -1){
            element.color = colors[indexOfType];
        }
        return element
    })
    return colorizedArray
}  // L'HO CAPITO MA NON SAREI STATO IN GRADO DI FARLO DA SOLO



//MILESTONE 3 
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone

function addOption(options , select) {
    options.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    })
    


}


function filteredElements(array , filter){
    if (filter.trim.toLowerCase === 'all'){
        return array;
    }

    return array.filter((element) => element.type == filter ) ;
    

}