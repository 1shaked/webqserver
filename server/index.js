const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Mideleware 
app.use(bodyParser.json());
app.use(cors());

//links routes
const get_questionnaires = require('./questionnaires/actions/get');
const posts_questionnaires = require('./questionnaires/actions/posts');
const deletes_questionnaires = require('./questionnaires/actions/deletes');

//forms files
const get_forms = require('./forms/get/forms');
const get_answers = require('./forms/get/answers');

const posts_forms = require('./forms/post/submit');


app.use('/actions/posts' , posts_questionnaires);
app.use('/actions/get' , get_questionnaires);
app.use('/action/deletes' , deletes_questionnaires);

//forms use
app.use('/forms/posts' , posts_forms);
app.use('/forms/get' , get_forms);
app.use('/forms/get_answers' , get_answers);



// Handel production
if(process.env.NODE_ENV === 'production' || true)
{
    //Static folder
    app.use(express.static(__dirname + '/public'));

    //Handel Singel Page app
    app.get(/.*/ , (req , res) => {
        res.sendFile(__dirname + '/public/index.html')
    });
}

const port = process.env.PORT || 5000;


app.listen(port , () => {
    console.log(`the port is ${port}`);
    console.log('for the webq ready to use!');
    
})
