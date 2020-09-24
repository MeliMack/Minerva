function $(elemento){
          return document.querySelector(elemento)
        }

window.addEventListener ('load', function(){
let formulario=$("#formulario");
let inputEmail=$("input[name='email']");
let inputPassword=$("input[name='password']");
let errorEmail=$("#errorEmail");
let errorPassword=$("#errorPassword");

let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    formulario.addEventListener('submit',function(event){
    event.preventDefault()
    
let errores={}
  console.log(errores==false);

      
    if(inputEmail.value==""){
            errores.email="Este campo es obligatorio";   
    }
    if(!inputEmail.value.match(regExEmail)){
            errores.email="Tenes que insertar un email valido"
    }

    if(inputPassword.value==""){
            errores.password="Este campo es obligatorio";
    }
    if (inputPassword.value.length<=6){
            errores.password= "El campo debe tener al menos seis caracteres"
    }

    if(Object.keys(errores).length != 0){//el largo del objeto errores es diferente a cero?entonces imprimi errores. De lo contrario, si no hay errores, enviar
            errorEmail.innerText = errores.email ? errores.email:"";
            errorPassword.innerText = errores.password ? errores.password:"";
    }else{
            formulario.submit()
    }
 })
})
