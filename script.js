/* console.log("Its working"); */
document.getElementById("year").innerHTML = new Date().getFullYear();

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  localStorage.setItem("theme", mode);
}

function sendMail() {
  var tempParams = {
    from_name: document.getElementById("from_name").value,
    from_mail: document.getElementById("from_mail").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_a2l42c9", "template_y6emsup", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
}
