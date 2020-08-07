


var massages = document.getElementById ('messages');

var sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendUserMessage)

async function getMessagesFromServer() {

var response = await fetch('https://fchatiavi.herokuapp.com/get/tfge/?offset=0&limit=10');

response = await response.json();

var allMessagesHTML = '';
for (var i = 0; i < response.length; i++) {
var messageData = response[i];
console.log (messageData);

var message =

    `<div class="message">
      <div class="message-nickname"> ${messageData.Name}</div>
        <div class="message-text"> ${messageData.Message} </div>
    </div>`
    ;

 allMessagesHTML = allMessagesHTML + message;



}




messages.innerHTML =allMessagesHTML;

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

await fetch('https://fchatiavi.herokuapp.com/send/tfge/?offset=0&limit=10',{
  method: 'POST',
  body: JSON.stringify({
    Name: userNickname,
    Message: userMessage,
  })
});
  getMessagesFromServer();
}
