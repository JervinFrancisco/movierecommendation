// JavaScript Document

let fetch = require('node-fetch');

//let uri = 'https://jsonplaceholder.typicode.com/users';
let movie = 'https://api.themoviedb.org/3/movie/api_key=';
let key = 'e7665ac25f1eddc9cc86e0c24ec4c813';
let uri = movie + key;
console.log(uri);
//uri = uri.concat('?units=ca&exclude=minutely,hourly&lang=en');
// units - ca, si, us, ok
//exclude minutely, hourly, daily, currently 
//lang - en, es , fr, ka
let options = {
    method: 'GET',
    mode: 'cors'
}

let req = new fetch.Request(uri, options);

fetch(req)
    .then((response) =>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('Bad HTTP!')
    }
})
.then( (j) =>{
    console.log(j.id);
//    
//    
//    console.log ( j.daily.data[0] );
//    j.forEach(function(user){
//    console.log(user.id, user.username, user.name);
//    })
    console.log('JSON data provided');
})
.catch( (err) =>{
    ;console.log('ERROR', err.message)
});