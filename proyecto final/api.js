
let url = 'https://script.google.com/macros/s/AKfycbzPbEl2Mqw6hbLuwN5Gto4lm7P1NakWQYXJAS9213wAcsdWoKENuHLQjkeffCMERMWQ/exec';

function looping(ropaDatos){
    for(let i =0; i < ropaDatos.length; i++){
        contenido.innerHTML +=`
        <h2> ${ropaDatos[i].Producto} </h2>
        <p>Los talles disponibles son: ${ropaDatos[i].Talle} </p>
        <p>Los colores disponibles son: ${ropaDatos[i].Color} </p>
        <img src= "${ropaDatos[i].Imagen}" width="290px" height="340px">
        <h3>El precio es: $ ${ropaDatos[i].Precio}</h3>
        `
    }
}


fetch('https://script.google.com/macros/s/AKfycbzPbEl2Mqw6hbLuwN5Gto4lm7P1NakWQYXJAS9213wAcsdWoKENuHLQjkeffCMERMWQ/exec')
    .then(response => response.json())
    .then(datos => {
        //console.log(datos.datos);
        looping(datos.datos);
    }) 
    .catch(error=> console.log(error), alert("sin resultados"));


