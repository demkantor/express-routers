const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    console.log('in /product GET');
    res.send('youve been served, enjoy!');
})//end GET /products


router.post('/', (req,res)=>{
    console.log('jungle boogie...', req.body);
    // goinftodosomething!!!!(req.body);
    res.sendStatus(201);
})//end /products POST


module.exports = router;