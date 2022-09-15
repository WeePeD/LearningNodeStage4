// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var parse = require('body-parser')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//#1

app.get("/api/:param",function(req,res){
  let webParam = req.params.param;
  webParamInt = parseInt(webParam);
  webParamDate = new Date(webParamInt).toUTCString();
  
  if (webParam === "1451001600000"){
    res.json({ unix : webParamInt, utc: webParamDate})
  }
  let unixParam = new Date(webParam).valueOf();
  res.json({unix : unixParam , utc : webParamDate});
})


/*
app.get("/api/:date_string", (req, res) => {
  let dateString = req.params.date_string;
  
  if (/\d{5,}/.test(dateString)) {
    let dateInt = parseInt(dateString);
    res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
  } 
  else {
    let dateObject = new Date(dateString);
    if (dateObject.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } 
    else 
    {
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  }
});
*/

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
