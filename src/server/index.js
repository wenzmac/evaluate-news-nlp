const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

//Get route
app.get('/', function (req, res) {
    res.send(projectData);
    //res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//})

app.post('/getSentiment', addData);

function addData (req, res) {
    projectData.overallSentiment = data.score_tag;
    projectData.agreement = data.agreement;
    projectData.confidence = data.confidence;
    projectData.irony = data.irony;
    projectData.subjectivity = data.subjectivity;
    res.end();
    console.log(projectData);
}


//const formdata = new FormData();
//formdata.append("key", "process.env.API_KEY");
//formdata.append("txt", "YOUR TEXT HERE");
//formdata.append("lang", "en");

//const requestOptions = {
//  method: 'POST',
//  body: formdata,
//  redirect: 'follow'
//};

//const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//  .then(response => ({
//    status: response.status,
//    body: response.json()
//  }))
//  .then(({ status, body }) => console.log(status, body))
//  .catch(error => console.log('error', error));
