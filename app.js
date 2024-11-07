const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { expressJwt, expressjwt } = require('express-jwt');

const jwtKey = "aedase423laoie323deijde402";

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const directorsRouter = require('./routes/directors');
const genresRouter = require('./routes/genres');
const moviesRouter = require('./routes/movies');
const membersRouter = require('./routes/members');

const app = express();

const url = "mongodb://localhost:27017/video-club";
mongoose.connect(url);
const db = mongoose.connection;

db.on('open', ()=>{
  console.log("Conexion a la base de datos establecida correctamente");

  /* acl = new acl(new acl.mongodbBackend(db, 'alc_')); */

});

db.on('error', ()=>{
  console.log("No se ha podido establecer la conexion a la base de datos");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressjwt({
  secret : jwtKey, 
  algorithms : ['HS256'] 
}).unless({path : ["/login","/login/"]})); //Se definen las excepciones de las rutas las cuales no requeriran de autorizacion

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/directors', directorsRouter);
app.use('/genres', genresRouter);
app.use('/movies', moviesRouter);
app.use('/members', membersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
