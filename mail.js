// EMAIL LIST
// chiedoo all`utente la sua email
const friendEmail = prompt("Scrivi la tua email..");
let listEmailAccepted = [
  "pl@gmail.com",
  "aca@gmail.com",
  "let@gmail.com",
  "las@gmail.com",
];
let errorText = "error not found";
let welcome = "welcome";
let found = false;
// controllare se l`email è sulla lista per poter accedere

for (let i = 0; i < listEmailAccepted.length; i++) {
  //se l email dell utente e diversa dalla email in lista
  if (friendEmail !== listEmailAccepted[i]) {
  }
}
//allora stampo un errore
if (friendEmail == found) {
  alert(errorText);
} else {
  //altrimenti stampo benvenuto
  alert(welcome);
}
