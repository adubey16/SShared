var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var router = express.Router();
const indexPath = path.join(__dirname, '../index.html');
const publicPath = express.static(path.join(__dirname, '../app'));

app.use('/', publicPath);
app.use(express.static(__dirname));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});






//to get data from server 
// app.post('/login',(req, res) => {
//   const { username, password } = req.body;
//   console.log(req.body);
//   if (username=='admin' && password=='12345') {
//         res.json({succes:true});
//       } else {
//         res.status(401).json({ errors: { form: 'Invalid Credentials' } });
//       }
//     } 
  
// );

app.post('/login', function (req,res) {
  
  res.json({succes:true});

  res.send('POST request to the homepage');
});




app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});


app.listen(7777,function(){
    console.log("Started listening on port", 7777 );
})
