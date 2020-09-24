//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

let usuarios = fs.readFileSync( path.join(__dirname, '../data/users.json'), "utf8")
usuarios = JSON.parse(usuarios);


const welcomeController = {
		//root: (req, res) => {
		//	res.render("welcome",{
		//		usuarios:usuarios
		//	});
		//},

		welcome: function(req, res, next) {
			res.render('welcome', {
				usuarios: req.session.usuario
			});
		},
}					
module.exports = welcomeController;
