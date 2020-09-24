//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
//EXPRESS VALIDATOR
const {check, validationResult, body} =require("express-validator");

//creo una variable que lea lo contenido en la base de datos
let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8")
usuarios = JSON.parse(usuarios);

//Para asignar un Id
let ultimoUsuario= 0;
for(let i=0; i<usuarios.length; i++){ //recorrer todos los usuarios
    if(usuarios[i].id > ultimoUsuario){ //si usuario tiene un id mayor al ultimo usuario
ultimoUsuario=usuarios[i].id //entonces asignarle ese id a ultimo usuario. ultimoUsuario siempre se va a sobreescribir.
    }
}


const saveRegisterController = {
	save: (req, res) => {
       let errores=validationResult(req);
      if(errores.isEmpty()){
		let nuevoUsuario={
            id: ultimoUsuario +1,
            name: req.body.name, //requiero los datos del formulario para que me los muestre
            email: req.body.email,
            avatar:(req.files[0])? req.files[0].filename:"default.png",
            password: bcrypt.hashSync(req.body.password, 10) //para encriptar el password    
        };
            usuarios.push(nuevoUsuario);//hago un push de todos los usuarios de la base
            fs.writeFileSync(path.join(__dirname, '../data/users.json') ,JSON.stringify(usuarios)) //convierte en JSON al array
            req.session.usuario={
                id:nuevoUsuario.id,
                email:nuevoUsuario.email,
                avatar:nuevoUsuario.avatar
            }
           
            res.redirect('/login');
      }else{
            res.render("register",{
                errores:errores.mapped()
            });
     }  

    },
    
	};

module.exports = saveRegisterController;