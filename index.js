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
            if (error) return reject(new Error("Lỗi của công"));
            if (!body.success) return reject(new Error("Lỗi của công"))
            return resolve(body.message);
        });
    })
}

function tru(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
        request(URL, { json: true }, function (error, response, body) {
            if (error) return reject(new Error("Lỗi của trừ"));
            if (!body.success) return reject(new Error("Lỗi của trừ"))
            return resolve(body.message);
        });
    })
}

// cong(3, 'a')
// .then(tong => tru(tong, 'a'))
// .then(hieu => console.log(hieu))
// .catch(error => console.log(error))


// 3 + 2 - 5


// cong(3 , 2 , (error , tong) => {
//     if (error) return console.log(error);
//     tru(tong , 5 , (error , hieu) => {
//         if (error) return console.log(error);
//         console.log(hieu);
//     })
// })

// promise

// async await

// async function xuly (a , b ){
//     try {
//         let tong = await cong(a, b);
//         let hieu = await tru(tong, 5);
//         console.log(hieu);
//     } catch (error) {
//         console.log(error);
//     }  
// }

// xuly(3 , 2);

function delay(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Finish");
        }, 2000)
    })
}

delay()
.then(data => console.log(data)) 