//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8")
usuarios = JSON.parse(usuarios);


const loginController = {
	login: (req, res) => {
		res.render("login");
	},

	//login: function(req, res) {
	//		res.render('login')
	//},
	
	valid:function(req, res) {
        let errores = validationResult(req);
        if(errores.isEmpty()) {
            for(let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                    req.session.user = usuarios[i].email;                   
                    if(req.body.recordame == 'on') {
                        res.cookie('user', usuarios[i].email, {maxAge: 1000});
                        
                    }
                    
                    return res.redirect('/welcome');
                }
            }
            return res.render('login', {
                errores: {
                    email: {
                        msg: 'Credenciales inválidas. Inserta un email registrado y contraseña'
                    }
                }
            })

        } else {
            res.render('login', {
                errores: errores.mapped(),
                old: req.body
            })
        }
	},

	logout: (req, res) => {
		req.session.destroy();
		res.cookie('user','',{maxAge: -1});
		res.redirect('/login')
	}
};

module.exports = loginController;
