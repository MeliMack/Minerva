//REQUIERO MODULOS
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const cartController = {
	// Root - CONTACT (RUTA EN CART.JS)
	root: (req, res) => {
		res.render("cart");
	},
	get: function(req, res) {
        res.render('cart', {
            productos: req.session.cart
        });
    },
    add: async function(req, res) {
        let check = false;

        if(typeof req.session.cart == 'undefined') {
            req.session.cart = []
        }

        for(let i = 0; i < req.session.cart.length; i++) {
            if(req.session.cart[i].id == req.body.id_producto) {
                check = true;
                req.session.cart[i].cantidad += (req.body.cantidad) ? Number(req.body.cantidad) : 1;
            }
        }

        if(!check) {
            let producto = await db.Producto.findByPk(req.body.id_producto);
            req.session.cart.push({
                ...producto.dataValues,
                cantidad: (req.body.cantidad) ? Number(req.body.cantidad) : 1
            })
        }

		return res.json(req.session.cart);
	}
	};

module.exports = cartController;
