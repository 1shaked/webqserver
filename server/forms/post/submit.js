const express = require('express');
const router = express.Router();


router.post('/submit_form' , async (req , res) =>
{
    let form = req.body.form;
    let name = form.name;
    let answers = form.answers;
    let time = new Date().toISOString().slice(0, 19).replace('T', ' ');    
    
    res.send(form);    
});

//export
module.exports = router;