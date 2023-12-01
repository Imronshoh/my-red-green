var elInp = document.querySelector(".inp");
var elP = document.querySelector(".p");
var elBtn = document.querySelector("button");

function myFn() {
  var val = elInp.value;
  if (val != val.toLowerCase()) {
    elInp.style.borderBottom = "2px solid green";
    elP.textContent = "Sen parolni togri kiritting.";
    elBtn.style.backgroundColor = "green";
    elBtn.style.border = "none";
    elP.style.color = "green";
  } else if (elInp.value == "") {
    alert("Nimadur kiriting!");
  } else if (val == val.toLowerCase()) {
    elInp.style.borderBottom = "2px solid red";
    elP.textContent = "Bitta katta harif kirit!";
    elBtn.style.backgroundColor = "red";
    elBtn.style.border = "none";
    elP.style.color = "red";
  }
}
