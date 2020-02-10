//globals
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRouter = require('./routes/product.router.js');


//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//server port
const port = 5000;
app.listen(port, ()=>{
    console.log('listening on port:', port);
});

//routes
app.use('/product', productRouter);

