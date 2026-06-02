const form =
document.getElementById("appointmentForm");

const list =
document.getElementById("appointmentList");

form.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let age =
document.getElementById("age").value;

let doctor =
document.getElementById("doctor").value;

let date =
document.getElementById("date").value;

let li =
document.createElement("li");

li.textContent =
`${name} | Age:${age} | ${doctor} | ${date}`;

list.appendChild(li);

form.reset();

});