

var messeges = document.getElementById ('messeges');

async function getMessegesFromServer() {

var response = await fetch  ('https://fchatiavi.herokuapp.com/get/null/?offset=0&limit=10');
response = await response.json();

var message =

    `<div class="masage">
      <div class="masage-nickname">Name</div>
        <div class="masage-text"> Messege </div>
    </div>`;

    messeges.innerHTML = messege;


}
