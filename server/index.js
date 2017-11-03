let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(__dirname + '/../react-client/dist'))


app.listen(3000, function() {
  console.log('this will appear in the terminal')
})
