const { Router } = require('express');
const router = Router();
//const express = require(express);
//const router = express.Router();

//rutas
router.get('/', (req,res) =>{
    const data ={
        "name": "John Doe",
        "id": "1234"
    }
    res.json(data);
});

module.exports = router;