

var massages = document.getElementById ('messages');

async function getMessagesFromServer() {

var response = await fetch  ('https://fchatiavi.herokuapp.com/get/null/?offset=0&limit=10');
response = await response.json();

var message =

    `<div class="message">
      <div class="message-nickname">Name</div>
        <div class="message-text"> Messege </div>
    </div>`;

    messages.innerHTML = message;


}
