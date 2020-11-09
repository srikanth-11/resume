//1. crete a request variable 

var request = new XMLHttpRequest();

//2. open a connection 

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//3. send the request 

request.send();

//4. load the response

 request.onload = function () {
    var data = JSON.parse(this.response);
var lattitude = data[0].latlng[0]
var longitude = data[0].latlng[1]

// creating an another request variable

var request1 = new XMLHttpRequest();

// open an another connection

let api = "http://api.openweathermap.org/data/2.5/weather?lat="
let api1="&lon="
let last ="&appid=f6a9b3d6f4569a7867f7443d738d705b&units=metric"
request1.open('GET',api+lattitude+api1+longitude+last,true)

// send the request

request1.send();

// load the response

request1.onload = function () {
    var data1 = JSON.parse(this.response);
    console.log(data1)
}
 }  




