const { Router } = require('express');
const router = Router();
//const express = require(express);
//const router = express.Router();

//rutas
router.get('/', (req,res) =>{
    res.json({"name": "John Doe"});
});

module.exports = router;