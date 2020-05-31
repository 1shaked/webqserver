const express = require('express');
const router = express.Router();
const fs = require('fs');
/*
--------------------------------------
This will handel all get requests
--------------------------------------
*/
  
router.get('/answers_form' , async(req , res) =>
{
  let questionnaire_name = req.query.questionnaire;
  console.log(questionnaire_name);
  
  fs.readFile(`./server/questionnaires/config/${questionnaire_name}.json`, 'utf8', function(err, contents) {
    console.log(contents);    
    res.status(200);
    res.send(contents);
  });

});


module.exports = router;