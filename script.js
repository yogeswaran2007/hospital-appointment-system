let token = 1001;

const form = document.getElementById("appointmentForm");
const list = document.getElementById("appointmentList");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    let currentToken = token;

    let li = document.createElement("li");

    li.innerHTML =
    "<b>Token No:</b> " + currentToken +
    "<br><b>Name:</b> " + name +
    "<br><b>Mobile:</b> " + mobile +
    "<br><b>Email:</b> " + email +
    "<br><b>Age:</b> " + age +
    "<br><b>Doctor:</b> " + doctor +
    "<br><b>Date:</b> " + date;

    list.appendChild(li);

    alert(
        "Appointment Confirmed!\n\n" +
        "Hospital: Vetri Vel Multi Speciality Hospital\n" +
        "Token Number: " + currentToken +
        "\nSMS Notification Sent" +
        "\nEmail Notification Sent"
    );

    token++;

    form.reset();
});