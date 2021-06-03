const request = require('request');



// function getTempCity(cityName , callback){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
//     request(URL, { json: true }, function (error, response, body) {
//         if (error) return callback(error);
//         if (body.cod === '404') return callback(body.message)
//         return callback(null , body.main.temp);
//     });
// } 

// getTempCity('Hanoi',(error , temp) => {
//     console.log(error || temp);
// })

function cong(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
    request(URL, { json: true }, function (error, response, body) {
        if (error) return cb(error);
        if (!body.success) return cb(body.message)
        return cb(null, body.message);
    });
}

function tru(a, b, cb){
    const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
    request(URL, { json: true }, function (error, response, body) {
        if (error) return callback(error);
        if (!body.success) return callback(body.message)
        return callback(null, body.message);
    });
}

cong(3, "a", (error , tong) => {
    console.log(error || tong)
})