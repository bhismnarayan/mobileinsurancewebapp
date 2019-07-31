try {
    fs.readFile('./public/data/data.json', 'utf8', (err, jsonString) => {
      if (err) {
          console.log("File read failed:", err)
          return
      }
     // console.log('File data:', jsonString) 
      var inputdata=JSON.parse(jsonString)
      for (var i=0;i<inputdata["data"].length;i++){
        console.log(inputdata["data"][i])
        postdata={'insurancedata':inputdata["data"][i]}
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