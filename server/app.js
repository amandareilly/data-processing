const express = require('express');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const router = require('./routes/router');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

// // handlebars view engine setup
// const hbs = exphbs.create({
//     extname: 'hbs',
//     layoutsDir: 'public/views/layouts',
//     partialsDir: 'public/views/partials',
//     defaultLayout: 'main',
//     helpers: {
//         dateFormat: require('handlebars-dateformat'),
//     }
// });

// app.set('views', path.resolve(__dirname, '../', 'public/views'));
// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');

// Router

app.use('/', router);

module.exports = app;