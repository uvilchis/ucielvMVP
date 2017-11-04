let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');

let Dictionary = require('oxford-dictionary-api');
let DICTIONARY_API_KEY = require('../react-client/config/apikey.js');
let app_id = '04797489';
let app_key = DICTIONARY_API_KEY;

let dictionaryApi = new Dictionary(app_id, app_key);


app.use(express.static(__dirname + '/../react-client/dist'))
app.use(bodyParser.json())
// body parser is responsible for translating post requests from the form

app.get('/oxford', (req, res)=>{
  dictionaryApi.find(req.query.formValue, (err, data)=>{
    res.send(data)
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000 ')
})
