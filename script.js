const contenido = document.querySelector(".contenido");

const elementos = [{
    imagen: "./img/imagenCancion1.jpg",
    audio: "./Pistas/lofi-background-music-326931.mp3",
    Cancion: "Lofi BackGround Music",
    Artista: "Lofi Girl"
} , {
    imagen: "./img/imagenCancion2.jpg",
    audio: "./Pistas/lofi-girl-lofi-ambient-music-365952.mp3",
    Cancion: "Lofi Ambient Music",
    Artista: "Lofi Girl"
} , {
    imagen: "./img/imagenCancion3.jpg",
    audio: "./Pistas/lofi-lofi-music-405237.mp3",
    Cancion: "Lofi Music",
    Artista: "Lofi Girl"
} , {
    imagen: "./img/imagenCancion4.png",
    audio: "./Pistas/rainy-lofi-city-lofi-music-332746.mp3",
    Cancion: "Rainy Lofi City",
    Artista: "Lofi Girl"
}];


let indice = 0;


function renderizar(indice){

    
    const element = elementos[indice];
    contenido.innerHTML = `
    <div class = "contenedorImg">
        <img class="img_cancion" style=border: solid yellow; src="${element.imagen}" alt="">
      </div>
      <audio controls id=audioPlayer src="${element.audio}"></audio>
      <div class="conjuntoBotones">
        <button class="atras">
          <img src="./img/skip_previous_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </button>
        <button class="Play">
          <img src="./img/resume_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </button>
        <button class="alante">
          <img src="./img/skip_next_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
        </button>
      </div>
      <h1>${element.Cancion}</h1>
      <p>${element.Artista}</p>
    `;

    asignarEventos();
}


function asignarEventos(){
    let botonAtras = document.querySelector(".atras");
    let botonPlay = document.querySelector(".Play");
    let botonAlante = document.querySelector(".alante");
    botonPlay.addEventListener("click", () => {
        const audio = document.querySelector("#audioPlayer");
    if(audio){
        if(audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
    }
    });

botonAlante.addEventListener("click", () => {
    indice = (indice + 1) % elementos.length;
    console.log("Avanzar, indice actual: ", indice);
    console.log("Elemento actual:", elementos[indice]);
    renderizar(indice);
});

botonAtras.addEventListener("click", () =>{
    indice = (indice - 1 + elementos.length) % elementos.length;
    console.log("Retroceder, índice actual:", indice);
    console.log("Elemento actual:", elementos[indice]);
    renderizar(indice);

});
}
renderizar(indice);


