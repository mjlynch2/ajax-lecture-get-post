Node/Express setup
===

Step 1: setup
---

- create folder
- open in VS Code
- git init
- 'npm init --yes'
- 'npm install express'
- create .gitignore with:
    - '/node_modules
- create 'server' folder
- create `server.js` in `server` folder
- create `server/public` folder
- in `public`: create `index.html`, `scripts` folder, `vendors` folder

Step 2: spinning up a server
---
```
// requires
const express = require('express');
const app = express();

// globals
const port = 5000;
// uses

// spin up server
app.listen(port, ()=>{
    console.log('Server is up:', port);
});

// routes
```

- run `node server/server.js` in terminal
- add start script to package.json
- add `app.use(express.static('server/public'));` to `server.js`

Routes Basics
===

```
// routes
app.get('/things', (req, res)=>{
    console.log('in /things GET');
    res.send('meow');
});
```
AJAX Basics
===

```
function getThings(){
    // use AJAX to make a GET request
    $.ajax({
        type: 'GET',
        url: '/things'
    }).then(function(response){
        // log out the response
        console.log('back from the server with:', response); 
        let el =$('#thingsOut');
        el.empty();  
        for(item of response){
            el.append(`<li>${item.name}</li>`)
        }
    }).catch(function(err){
        // catch errors here
        alert(err);
    });
}
```

