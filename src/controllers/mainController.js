//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	// Root - HOME (RUTA EN MAIN.JS)
	root: (req, res) => {
		res.render("main",{
			main:products
		});
	},

	//search: (req, res) => {
	//},
};

module.exports = controller;
