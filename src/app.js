const path = require('path');

const express = require('express');
const app = express();


// Registrar como publica/static la carpeta public
app.use(express.static('public'));

// Registrar carpetas estaticas con "prefijos"
app.use('/desktop', express.static('desktop'));
app.use('/mobile', express.static('mobile'));

// Registrar ejs como motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {

    res.render('index', {
        usuario: [
            {
                name: "Federico",
                email: "fede@gmail.com"
            },
            {
                name: "Romina",
                email: "romi@gmail.com"
            },
            {
                name: "Matias",
                email: "mati@gmail.com"
            },
            {
                name: "Juan",
                email: "juan@gmail.com"
            }
        ]
    });
});

app.get('/product', function(req, res) {

    res.render('product');

})


app.listen(3000, () => console.log('Proyecto en el puerto 3000'));

