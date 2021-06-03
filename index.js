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

// function cong(a , b , cb){
//     const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
//     request(URL, { json: true }, function (error, response, body) {
//         if (error) return cb(error);
//         if (!body.success) return cb(body.message)
//         return cb(null, body.message);
//     });
// }

function cong(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
        request(URL, { json: true }, function (error, response, body) {
            if (error) return reject(error);
            if (!body.success) return reject(body.message)
            return resolve(body.message);
        });
    })
}


cong(3,2)
.then(tong => console.log(tong))
.catch(error => console.log(error))

function tru(a, b, cb){
    const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
    request(URL, { json: true }, function (error, response, body) {
        if (error) return cb(error);
        if (!body.success) return cb(body.message)
        return cb(null, body.message);
    });
}

// 3 + 2 - 5

// cong(3 , 2 , (error , tong) => {
//     if (error) return console.log(error);
//     tru(tong , 5 , (error , hieu) => {
//         if (error) return console.log(error);
//         console.log(hieu);
//     })
// })

// promise