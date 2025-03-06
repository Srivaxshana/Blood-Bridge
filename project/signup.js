async function createNewUsersData() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var s = "@";
    let url = "https://63870223e399d2e473f1e725.mockapi.io/bloodbuddy";
    let newUser = {
      name: `${username}`,
      email: `${email}`,
      password: `${password}`,
      phone: ` ${phone}`,
    };
    if (username.length == 0) {
      alert("Please provide username");
    } else if (phone.length <= 9) {
      alert("please provide Phone number");
    } else if (password.length <= 6) {
      alert("Password maximum should be above 8 characters");
    } else if (email.length === 0 && email != s) {
      alert("please provide a valid Email Id");
    } else {
      let data = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let res = await data.json();
      console.log(res);
      console.log(username, email, password, phone);
      alert("you have successfully reigstered");
      sendEmail();
      afterSignUp();
      // window.open('./login.html')
    }
    function sendEmail() {
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kmhcoder@gmail.com",
        Password: "69F090596806B70F2A3E68D5C0B59F5CDF98",
        // SecureToken: "0563b21a-35fa-48bb-9709-11f0a1ad277e",
        To: email,
        From: "kmhcoder@gmail.com",
        Subject: `BloodBuddy`,
        Body: `Hey ${username}, your registration with bloodybuddy is successful.
                 Thanks for being a part of good cause`
      })
    }
    function afterSignUp() {
      alert("Checkout your email")
      // window.open("./login.html")
      window.location.href = ("./login.html")
    }
  }
  
  