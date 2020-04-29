//Call Nasa API
var strUrl = "https://api.nasa.gov/planetary/apod?api_key=ylUusC6Wd8S4Ko85hU4eiGdDRJb9DShRLzL6wfk3&date=";
var urlDate = "2004-05-01";
var request = new XMLHttpRequest();
request.open('GET', strUrl + urlDate, true);
request.onload = function () {

 var data = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {

  document.querySelector('.title').textContent = data.title;
  document.querySelector('.photourl').src = data.url;
  document.querySelector('.explanation').textContent = data.explanation;
  document.querySelector('.copyright').textContent = data.copyright;
  document.querySelector('.date').textContent = data.date;

 } else {
   const errorMessage = document.createElement('marquee');
   errorMessage.textContent = `Error`;
   app.appendChild(errorMessage);
 }
}
request.send();

function addDays(myDate,days) {
  return new Date(myDate.getTime() + days*24*60*60*1000);
}

