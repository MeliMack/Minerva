//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8")
usuarios = JSON.parse(usuarios);

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const loginController = {
	// Root - FAQ (RUTA EN LOGIN.JS)
	root: (req, res) => {
		res.render("login");
	},
	welcome: (req, res) => {
		res.render("welcome");
	},
	login: (req, res) => {
		//return res.send(req.body);
		//creo una sesion llamada user
		req.session.user=req.body.email;
		if(req.body.recordame =="on"){
			res.cookie('user',req.body.email,{maxAge:10000});
		}
		res.redirect('/welcome')
	},
	logout: (req, res) => {
		req.session.destroy();
		res.cookie('user','',{maxAge: -1});
		res.redirect('/login')
	}
	};

module.exports = loginController;
