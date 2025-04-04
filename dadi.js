const userNumber = Math.floor(Math.random() * 7) + 1;
const pcNumber = Math.floor(Math.random() * 7) + 1;

console.log(userNumber, "usernumber");
console.log(pcNumber, "pcnumber");

if (userNumber > pcNumber) {
  alert("usernumber win");
} else if (pcNumber > userNumber) {
  alert("pcnumber win");
} else {
  alert("tie");
}
