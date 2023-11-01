
/*=============================================//INICIO PAGINA DE REGISTRO//=================================================*/

let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function(){
    nameInput.style .maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}


signUp.onclick = function(){
    nameInput.style .maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

const nombre = document.getElementById("name")
const password = document.getElementById("password")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entrar = false
    parrafo.innerHTML = ""

    if(nombre.value.length <6){
        warnings += ('*El nombre tiene que tener mas de 6 digitos.<br>')
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += ('*El email no es valido.<br>')
        entrar = true
    }
    if(password.value.length<8){
        warnings += ('*La contraseña tiene que tener mas de 8 digitos.<br>')
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


/*=============================================//FIN PAGINA DE REGISTRO//=================================================*/




/*=============================================//INICIO DE LA API//=================================================*/

let url = 'https://script.google.com/macros/s/AKfycby6jNtVF4g8bjEfAg-WGuWGyKnB8tR4lyZD1e2tDmC9dXVr1nvNic1-lYQ8fMH2AecP7Q/exec';

function looping(ropaDatos){
    for(let i =0; i < ropaDatos.length; i++){
        contenido.innerHTML +=`
        <h2>${ropaDatos[i].talles}</h2>
        <img src= "${ropaDatos[i].imagen}" width="10%" height="auto">
        <h3>El precio es: ${ropaDatos[i].precio}</h3>
        `
    }
}

    function traer(){
    fetch('https://script.google.com/macros/s/AKfycby6jNtVF4g8bjEfAg-WGuWGyKnB8tR4lyZD1e2tDmC9dXVr1nvNic1-lYQ8fMH2AecP7Q/exec')
    .then(response => response.json())
    .then(datos => {
        //console.log(datos.datos);
        looping(datos.datos);
    })
    .catch(error=> console.log(error), alert("sin resultados"));
    }
















/*=============================================//FIN DE LA API//=================================================*/