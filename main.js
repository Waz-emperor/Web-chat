

var massages = document.getElementById ('messages');

async function getMessagesFromServer() {

var response = await fetch('https://fchatiavi.herokuapp.com/get/tfge/?offset=0&limit=100');

response = await response.json();

for (var i = 0; i < response.length; i++) {
var messegeData = response[i];
console.log (massageData);

var message =

    `<div class="message">
      <div class="message-nickname"> ${massageData.name}</div>
        <div class="message-text"> ${massageData.Message} </div>
    </div>`
    ;
  messages.innerHTML = message;



  
}






}
