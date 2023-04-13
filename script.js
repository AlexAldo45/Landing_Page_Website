let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

document.getElementById("next").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft += widthItem;
};
document.getElementById("prev").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft -= widthItem;
};

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return {
    name,
    email,
    city,
    zipCode,
    status
  };
}

function isNumber(input) {
  return !isNaN(input) && !isNaN(parseFloat(input));
}

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}

function validateFormData(formData) {
  if (!formData) {
    return false;
  }else if (!isNumber(formData.zipCode)) {
    return false;
  }else if(!checkboxIsChecked()){
    return false;
  }else{
    return true;
  }
}

function submit() {
  const warning = document.getElementById("warning");

  if (!validateFormData(handleGetFormData())) {
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warning.innerHTML = "";
  }
}

document.getElementById("form").addEventListener("submit", submit);