// REQUIRE EXPRESS//
const express = require('express');
const router = express.Router();

// REQUIRE CONTROLADOR//
const productsController = require('../controllers/productsController');

//RUTAS//
//RUTA PRODUCTOS-(ALL PRODUCTS)
router.get('/', productsController.root); 

//RUTA DETALLE DE LOS PRODUCTOS-(PRODUCTS DETAIL)
router.get('/detail/:productId/', productsController.detail); 

//CREAR PRODUCTO 
//Es para visualizar el formulario (GET)
router.get('/create/', productsController.create); 
//Es para crear el producto una vez que se completa el formulario y guardarlo en el JSON (POST)
router.post('/create/', productsController.store); 

//EDITAR UN PRODUCTO 
//Mediante metodo GET para visualizar formulario de edicion
router.get('/edit/:productId', productsController.edit); 
//Metodo PUT, para realizar la edicion y guardar los datos actualizados 
router.put('/edit/:productId', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
//router.delete('/delete/:productId', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;
