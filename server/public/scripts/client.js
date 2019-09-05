$(document).ready(readyNow);

function readyNow(){
    getThings();
}

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