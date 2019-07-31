const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var http = require('http');
var request = require('request');
const fs = require('fs')
app.set('view engine', 'ejs')   
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
 
 res.render('index');
})
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/buyinsurance', function (req, res) {
 // res.send('Hello World!')
 res.render('buyinsurance');
})
app.get('/getinsurance', function (req, res) {
 // res.send('Hello World!')
 res.render('getinsurance');
})

app.post('/', function (req, res) {
    //console.log(req.body);
    postdata={'insurancedata':req.body}
    url="https://yogql2suug.execute-api.us-east-1.amazonaws.com/dev/todos";
    var clientServerOptions = {
      uri:url ,
      body: JSON.stringify(postdata),
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  }
  request(clientServerOptions, function (error, response) {
      console.log(error,response.body);
      return;
  });
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})