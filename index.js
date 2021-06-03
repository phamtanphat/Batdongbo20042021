const request = require('request');



function getTempCity(cityName , callback){
    const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
    request(URL, { json: true }, function (error, response, body) {
        if (error) return callback(error);
        if (body.cod === '404') return callback(body.message)
        return callback(null , body.main.temp);
    });
} 

getTempCity('Hanoi',(error , temp) => {
    console.log(error || temp);
})