// requires
const express = require('express');
const app = express();

// globals
const port = 5000;
let things = [];
things.push({name: 'bottle'});
// uses
app.use(express.static('server/public'));

// spin up server
app.listen(port, ()=>{
    console.log('Server is up:', port);
});

// routes
app.get('/things', (req, res)=>{
    console.log('in /things GET');
    res.send(things);
});