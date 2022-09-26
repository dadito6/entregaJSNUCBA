const login= document.getElementById('container')
const boton= document.getElementById('boton')
const a = document.getElementById('formu')

document.addEventListener('DOMContentLoaded', () =>{

const inputUser = document.getElementById('name')
const inputPass= document.getElementById('Contraseña')



boton.addEventListener('click', (event) =>{
    event.preventDefault()
    if (inputUser.value && inputPass.value){
        const validPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if ((inputUser.value.length>1 && inputUser.value.length<8) && (inputPass.value.length>6 && inputPass.value.match(validPass))){
        const data = {
            user:inputUser.value,
            password:inputPass.value,
        }
        localStorage.setItem('Usuarios',JSON.stringify(data))
        window.location="http://127.0.0.1:5500/index.html#general"
        
        }else{
            avisoMensaje('Por favor ingrese datos validos')
        }
    }else{
        avisoMensaje("Por favor, complete todos los campos")
        console.log(inputU)
    }

})
const formState=[]






})


function avisoMensaje(data){
    const span = document.createElement('span')
    const ul = document.createElement('ul')
    const li =  document.createElement('li')
    span.appendChild(document.createTextNode(`${data}`))
    li.appendChild(span)
    ul.appendChild(li)
    a.appendChild(ul)
}