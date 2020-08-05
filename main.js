async function getMessegesFromServer() {

var response = await fetch  ('https://fchatiavi.herokuapp.com/get/null/?offset=0&limit=10');
response = await response.json();
console.log(response);
}
