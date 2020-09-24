
//const createError = require('http-errors');

const logger = require('morgan');

const express = require('express');
const app = express();
const methodOverride =  require('method-override'); // Requiero Metodo Override. Para poder usar los métodos PUT y DELETE
const path = require('path');
const session=require("express-session");
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
//Gracias a estas dos lineas se pueden leer los POST en JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Le doy uso al metodo OverRide. Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({secret:"login"}));
app.use(logger('dev'));
app.use(cookieParser());


// TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// SISTEMA DE RUTEO Y USO
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const aboutRouter = require('./routes/about'); // Rutas /about
const faqRouter = require('./routes/faq'); // Rutas /faq
const contactRouter = require('./routes/contact'); // Rutas /contact
const loginRouter = require('./routes/login'); // Rutas /login
const welcomeRouter = require('./routes/welcome');
const registerRouter = require('./routes/register'); // Rutas /register
const cartRouter = require('./routes/cart'); // Rutas /cart


app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/about', aboutRouter);
app.use('/faq', faqRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/welcome', welcomeRouter);
app.use('/register', registerRouter);
app.use('/cart', cartRouter);



// ************ catch 404 and forward to error handler ************
//app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
//app.use((err, req, res, next) => {
  // set locals, only providing error in development
  //res.locals.message = err.message;
 // res.locals.path = req.path;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
//});


module.exports = app;
