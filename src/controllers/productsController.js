//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//Para que se recorran todos los productos e identifique ultimo numero de id 
let ultimoId= function(){
	let contador=products[0].id;
	for(let i =0; i<products.length;i++){
		if(products[i].id>contador){
			contador=products[i].id;
		}
	}
	return contador;
}

//RENDERIZO LAS VISTAS//
const productsController = {
	// Root - ALL PRODUCTS (RUTA EN PRODUCTS.JS)
	root: (req, res) => {
		res.render("products",{
			products:products
		});
	},

	// Detail - PRODUCTS DETAILS (RUTA EN PRODUCTS.JS)
	detail: (req, res) => {
		//QUIERO QUE TRAIGA EL DETALLE DEL PRODUCTO SEGUN EL ID SELECCIONADO POR EL USUARIO
		for(let i=0; i<products.length; i++){
			if(products[i].id==req.params.productId){
				return res.render("detail",{
				product:products [i]
			});
			}
		}
		//EN CASO NO EXISTA EL PRODUCTO SELECCIONADO PUEDO MOSTRAR UN MENSAJE O REDIRIGIR. DEBAJO MUESTRO UN MSJ
		res.send("No encontramos un producto con esas caracteristicas");	
	},

	// Create - PARA VISUALIZAR EL FORMULARIO
	create: (req, res) => {
		res.render("product-create-form");
	},
	
	// Create -  METODO POST, PARA COMPLETAR Y ALMACENAR
	//la variable ultimoId esta en la linea 11
	store: (req, res) => {
		let nuevoProducto={
			id: ultimoId (products) +1,
			name: req.body.name,
			price: req.body.price,
			discount:req.body.discount,
			category: req.body.category,
			description:req.body.description,
			image:req.files[0].filename

		}
		//Hago un push para traer el producto posteado, con el modulo fs y la ruta indico donde guardarlo. Antes de guardarlo en el JSON le tengo que hacer un stringify
		products.push(nuevoProducto);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'),JSON.stringify(products));
		res.redirect("/products");
		},

	// Update -Muestra el formulario de edicion. Me lo tiene que mostrar con los campos completos
	edit: (req, res) => {
		for(let i=0; i<products.length; i++){
			if(products[i].id==req.params.productId){
				return res.render("product-edit-form",{
				product:products [i]
				});
			}
		}
		res.send("No encontramos un producto con esas caracteristicas");
	},

	// Update -Metodo PUT para actualizar el producto seleccionado
	update: (req, res) => {
		for(let i=0; i<products.length; i++){
			if(products[i].id==req.params.productId){
				products[i]==req.body;
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'),JSON.stringify(products));
				res.redirect("/products");
			}
		}
		res.send("No encontramos un producto con esas caracteristicas");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		for (let i = 0; i < productsPARSED.length; i++) {
			   if (productsPARSED[i].productID == req.params.productId) {
			      productsPARSED.splice(i, 1);
			      let newProductsJSON = JSON.stringify(productsPARSED)
			      fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), newProductsJSON);
			      return res.redirect('/');
			         }
			      }
			      res.send('Error de delete product')
			

	}
};

module.exports = productsController;