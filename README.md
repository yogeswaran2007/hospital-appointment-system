Vetri Vel Hospital - Appointment Booking System

Project Description

Vetri Vel Hospital Appointment Booking System is a web-based application that allows patients to book appointments with doctors online. The system helps patients select doctors and appointment dates easily.

Hospital Name

Vetri Vel Hospital

Features

- Patient Registration
- Doctor Selection
- Appointment Booking
- Appointment List Display
- SMS Notification Simulation
- Email Notification Simulation

Technologies Used

- HTML
- CSS
- JavaScript
- GitHub

ER Diagram 

+-----------+      +---------------+      +-----------+
|  Patient  |------| Appointment   |------|  Doctor   |
+-----------+      +---------------+      +-----------+
| PatientID |      | AppointmentID |      | DoctorID  |
| Name      |      | Date          |      | Name      |
| Phone     |      | Time          |      | Specialty |
| Email     |      | Status        |      | Phone     |
+-----------+      | PatientID(FK) |      +-----------+
                   | DoctorID(FK)  |
                   +---------------+

Case Diagram 

+------------------+
          |     Patient      |
          +------------------+
                  |
      -------------------------
      |           |           |
 Register    Book Appt   View Appt
      |           |           |
      -------------------------
                  |
          +------------------+
          |     System       |
          +------------------+
                  |
      -------------------------
      |                       |
 View Patients      Manage Appointments
      |                       |
          +------------------+
          |      Admin       |
          +------------------+


Developed By

Vetri Vel

Conclusion

This project demonstrates a simple Hospital Appointment Booking System developed using HTML, CSS, and JavaScript. It provides an easy way for patients to book appointments online.