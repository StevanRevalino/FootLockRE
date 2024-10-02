// Toogle Active
const navbarNav = document.querySelector(".navbar-nav");

//saat menu di klik
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar agar nav hilang
const hamburger = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Subs form
function ValidateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var checkbox = document.getElementById("checkbox").checked;

  if (username == "") {
    alert("Name Cannot Be Empty");
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email Must Be End With @gmail.com");
  } else if (phone.charAt(0) !== "0") {
    alert("Phone Number Must Be Start With '0'");
  } else if (country == "empty") {
    alert("Please Choose The Country");
  } else if (!checkbox) {
    alert("Terms And Condition Must Be Agreed To");
  } else {
    alert("Form Submitted Sucessfully");  
  }
}
