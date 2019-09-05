$(document).ready(onReady);

function onReady(){
    getThings();
    $('#addThing').on('click', addThing);
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

function addThing(){
    // use AJAX to make a POST request
    let objectToSend = {
        name: $('#nameIn').val()
    };
    $.ajax({
        type: 'POST',
        url: '/things',
        data: objectToSend
    }).then(function(response){
        console.log('back from the server with:', response);
        getThings();
    }).catch(function (err) {
        alert(err);
    }) // end POST
}