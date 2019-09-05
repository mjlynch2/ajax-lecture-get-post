// requires
const express = require('express');
const app = express();

// globals
const port = 5000;
// uses
app.use(express.static('server/public'));

// spin up server
app.listen(port, ()=>{
    console.log('Server is up:', port);
});
