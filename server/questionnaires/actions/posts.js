const express = require('express');
const fs = require('fs');

const router = express.Router();


router.post('/create_questionnaire' , async (req , res) =>
{
    let questionnaire = req.body.questionnaire;
    let name = questionnaire.name;
    //console.log('questionnaire');
    console.log(questionnaire);

    let questionnaire_string = JSON.stringify(questionnaire);
    fs.writeFile(`./server/questionnaires/config/${name}.json`, questionnaire_string, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    //write to BU Folder
    fs.writeFile(`./server/questionnaires/BU_forms/${name}.json`, questionnaire_string, (err) => {
      if (err) throw err;
      console.log('Data written to BU file');
    });
    //send status that was good with the questionnaire name
    res.send(questionnaire);    
});


router.post('/duplicate_questionnaire' , async (req , res) =>
{
    let source = req.body.source;
    let new_name = req.body.new_name;
    
    fs.copyFile(`./server/questionnaires/config/${source}.json` , `./server/questionnaires/config/${new_name}.json` , (err) =>
    {
      if (err) console.log(`could not duplicate questionnaires`);
    });

    fs.copyFile(`./server/questionnaires/BU_forms/${source}.json` , `./server/questionnaires/BU_forms/${new_name}.json` , (err) =>
    {
      if (err) console.log(`could not duplicate questionnaires BU`);
    });
    
    res.send(req.body);    
});

router.post('/archive_quesnpm tionnaire', async (req , res) => {
  const name = req.body.name;
  // const new_name = req.body.new_name;
    
  fs.rename(
    `./server/questionnaires/config/${name}.json`,
    `./server/archive/${name}.json`,
    (respond) => {
      console.log(respond);
      res.send(respond);
    }
  )
});



//export
module.exports = router;