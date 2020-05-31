const express = require('express');
const router = express.Router();
const fs = require('fs');
/*
--------------------------------------
This will handel all get requests
--------------------------------------
*/
router.get('/' , async (req , res) =>
{
    //Need to make an obj that take the data and do all the querys
    res.status(200).send("DataBack");
});

router.get('/questionnaires_names' , async(req , res) =>
{
  let files = fs.readdirSync('./server/questionnaires/config/')
  files = files.map(file => file.replace('.json' , ''))
  res.status(200);
  res.send(files);
});

router.get('/questionnaire_details' , async(req , res) =>
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