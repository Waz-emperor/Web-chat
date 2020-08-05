

var massages = document.getElementById ('messages');

async function getMessagesFromServer() {

var response = await fetch('https://fchatiavi.herokuapp.com/get/tfge/?offset=0&limit=100');

response = await response.json();

for (var i = 0; i < response.length; i++) {
var messegeData = response[i];
console.log (messegeData);
}

var message =

    `<div class="message">
      <div class="message-nickname">Name</div>
        <div class="message-text"> Message </div>
    </div>`
    ;

    messages.innerHTML = message;


}
