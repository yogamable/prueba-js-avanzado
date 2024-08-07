//MODULOS
import { Aguila, Leon, Lobo, Oso, Serpiente } from "./clasesHijas.js"; 

//ARRAY
let animales = [];
console.log(animales);

//FUNCION AUTOEJECUTABLE: 

(async ()=>{

    try{
        const respuesta = await fetch("animales.json");
        const data = await respuesta.json();

        data.animales.forEach(element => {
            
            switch(element.name){
                case 'Leon':
                    animales.push(new Leon(element.name, element.imagen, element.sonido));
                    break;
                case 'Lobo':
                    animales.push(new Lobo(element.name, element.imagen, element.sonido));
                    break;
                case 'Oso':
                    animales.push(new Oso(element.name, element.imagen, element.sonido));
                    break;
                case 'Serpiente':
                    animales.push(new Serpiente(element.name, element.imagen, element.sonido));
                    break;
                case 'Aguila':
                    animales.push(new Aguila(element.name, element.imagen, element.sonido));
                    break;
                default:
                    console.log("No se encontró la data");
            }
        });

    }catch(error){
        console.log(error);
    };

})();

//MOSTRAR IMG EN PREVIEW
let idAnimal = document.querySelector("#animal");
let vistaPrevia = document.getElementById("preview");

idAnimal.addEventListener("change", ()=>{

    let animalSeleccionado = idAnimal.value;
    let solicitandoInfo = animales.findIndex(
        (element) => element.getNombre() == animalSeleccionado);
    
    vistaPrevia.innerHTML = `<div class="d-flex align-content-start card p-4"><img src="assets/imgs/${animales[solicitandoInfo].getImg()}" style="height: 10rem;"></div>`;      

});

//REGISTRAR EN ANIMALES EN INVESTIGACIÓN
let divAnimales = document.querySelector("#Animales");
let btnRegistrar = document.querySelector("#btnRegistrar");

btnRegistrar.addEventListener("click", ()=>{

    let animalSeleccionado = idAnimal.value;
    let solicitandoInfo = animales.findIndex(
        (element) => element.getNombre() == animalSeleccionado);
    
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = "card bg.white m-2";
    nuevaTarjeta.style.width = "10rem";
    nuevaTarjeta.innerHTML = `
        <img id="cardAnimal" src="assets/imgs/${animales[solicitandoInfo].getImg()}" class="card-img-top" alt="">
        <p>${animales[solicitandoInfo].getNombre()}</p>
        <audio id="player" src="assets/sounds/${animales[solicitandoInfo].getSonido()}" class="d-flex text-white">Sonido</audio>
    `;

    divAnimales.appendChild(nuevaTarjeta);
    
    document.querySelector("audio").src = 
    `assets/sounds/${animales[solicitandoInfo].getSonido()}`;
    
    document.querySelector("audio").play();

});
