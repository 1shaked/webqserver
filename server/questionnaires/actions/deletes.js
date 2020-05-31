const express = require('express');
const fs = require('fs');

const router = express.Router();




/*
--------------------------------------
This will handel all delete requests
--------------------------------------
*/
router.delete('/' , async (req , res) =>
{
    //Need to make an obj that take the data and do all the querys
    console.log("work");
    res.status(200).send();
});

router.delete('/questionnaire' , async (req , res) =>
{
    let questionnaire_name = req.body.name;
    console.log(questionnaire_name);

    fs.unlink(`./server/questionnaires/config/${questionnaire_name}.json`, (err) => {
      if (err) throw err;
      console.log(`questionnaire ${questionnaire_name} was deleted`);
      res.status(200).send();
    });
});


module.exports = router;