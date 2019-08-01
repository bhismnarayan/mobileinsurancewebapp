const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var http = require('http');
var request = require('request');
var url = require('url');
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
app.get('/getinsurancedata', function (req, res) {
  //console.log(req.query);
  var url_parts = url.parse(req.url, true);
var query = url_parts.query;
var emailurl='https://ebhdfqufzd.execute-api.us-east-1.amazonaws.com/dev/todos?email="'+query.email+"'";
request.get(emailurl,function(err,response,body){
  if(err) //TODO: handle err
  {

  }
  if(response.statusCode == 200 ) //etc
  //TODO Do something with response
  {
    res.send(response.body);
  }
  else{
    res.send(response.body);
  }
  
});

 // res.send('getinsurance');
 })
app.post('/', function (req, res) {
    //console.log(req.body);
    postdata={'insurancedata':req.body}
    url="https://ebhdfqufzd.execute-api.us-east-1.amazonaws.com/dev/todos";
    var clientServerOptions = {
      uri:url ,
      body: JSON.stringify(postdata),
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  }
  request(clientServerOptions, function (error, response) {
      console.log(error,response);
      res.render('Thankyou');
  });
  })

app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})
