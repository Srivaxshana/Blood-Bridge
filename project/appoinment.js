function sendAppointmentEmail() {
    var donoremail = document.getElementById("donoremail").value;
    var Date = document.getElementById("date").value;
    var Time = document.getElementById("time").value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "kmhcoder@gmail.com",
      Password: "69F090596806B70F2A3E68D5C0B59F5CDF98",
      // SecureToken: "0563b21a-35fa-48bb-9709-11f0a1ad277e",
      To: donoremail,
      From: "kmhcoder@gmail.com",
      Subject: `BloodBuddy`,
      Body: `Blood Donation Appointment Details : Date: ${Date} , Time: ${Time} `
  
    })
    // .then((message) => alert(message));
    // window.open("../index.html")
    // window.location.href = "../index.html"
    afterAppointment();
  }
  
  function afterAppointment(){
    alert("Checkout your email")
    window.open("../index.html")
  }