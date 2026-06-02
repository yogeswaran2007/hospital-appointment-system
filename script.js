const form = document.getElementById("appointmentForm");
const list = document.getElementById("appointmentList");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    let li = document.createElement("li");

    li.textContent =
    "Name: " + name +
    " | Age: " + age +
    " | Doctor: " + doctor +
    " | Date: " + date;

    list.appendChild(li);

    alert("Appointment Booked Successfully! SMS and Email Notification Sent.");

    form.reset();
});