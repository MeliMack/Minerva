function $(elemento){
          return document.querySelector(elemento)
        }

window.addEventListener ('load', function(){
let formprod=$("#formprod");
let inputName=$("input[name='name']");
let textareaDescription=$("textarea[name='description']");
let errorName=$("#errorName");
let errorDescripcion=$("#errorDescripcion");



formprod.addEventListener('submit',function(event){
    event.preventDefault()
    
let errores={}
  console.log(errores==false);

    if(inputName.value==""){
    errores.name="Este campo es obligatorio";
    }  
    if (inputName.value.length<=5){
    errores.name= "El campo debe tener al menos cinco caracteres"
    }
   
    if (textareaDescription.value.length<=20){
            errores.descripcion= "El campo debe tener al menos veinte caracteres"
    }

    if(Object.keys(errores).length != 0){//el largo del objeto errores es diferente a cero?entonces imprimi errores. De lo contrario, si no hay errores, enviar
            errorName.innerText = errores.name ? errores.name:"";
            errorDescripcion.innerText = errores.descripcion ? errores.descripcion:"";
    }else{
        formprod.submit()
    }
 })
})
