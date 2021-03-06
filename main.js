
//debugger;

var massages = document.getElementById ('messages');
var roomNameInput = document.getElementById ('roomname-input');
var sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendUserMessage);

start();

function start() {
  setInterval(getMessagesFromServer, 2000);

}

var lastMessages = [];



async function getMessagesFromServer() {

  var roomname = roomNameInput.value;

var response = await fetch(`https://fchatiavi.herokuapp.com/get/${roomname}/?offset=0&limit=100000000`);

response = await response.json();

//debugger;

if (response == null) {
  messages.innerHTML = 'No messages';
  return;
}

var messagesHTML = fromMessagesHTML(response);

//debugger;

//console.log(messagesHTML);

messages.innerHTML = messagesHTML;

if (lastMessages.length < response.length) {
  scrollToEnd();
}
 lastMessages = response;
}

async function sendUserMessage() {

var userNickname =  document.getElementById('Nickname-input').value;
var userMessage =  document.getElementById('Message-input').value;

if (userNickname.length === 0) {
  alert('ты должен ввести имя');
  return;
}

if (userMessage.length === 0) {
  alert('ты должен ввести сообщение');
  return;
}

await fetch(`https://fchatiavi.herokuapp.com/send/${roomname}/?offset=0&limit=10`,{
  method: 'POST',
  body: JSON.stringify({
    Name: userNickname,
    Message: userMessage,
  })
});
  getMessagesFromServer();
scrollToEnd();



}

function fromMessagesHTML(messages) {
  var allMessagesHTML = '';
for (var i = 0; i < messages.length; i++) {
var messageData = messages[i];
console.log (messageData);

var message =

    `<div class="message">
      <div class="message-nickname"> ${messageData.Name}</div>
        <div class="message-text"> ${messageData.Message} </div>
    </div>`
    ;

 allMessagesHTML = allMessagesHTML + message;
 }
 return allMessagesHTML;
}

function scrollToEnd() {
  messages.scrollTop = messages.scrollHeight;
}
