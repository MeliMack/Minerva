//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - CONTACT (RUTA EN CART.JS)
	root: (req, res) => {
		res.render("cart");
    },
	};

module.exports = controller;
