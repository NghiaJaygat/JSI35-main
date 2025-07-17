// validate form
function validateForm(email, password) {
  if (!email || !password) {
    alert("Email and Password must be filled out");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }
  return true;
}

// bat su kien submit form dang nhap
document.querySelector("#login-form").onsubmit = function (event) {
  // chan luong xu ly mac dinh
  event.preventDefault();
  // lay thong tin tu form
  const email = document.querySelector("#email").value;
  const password = document.getElementById("password").value;
  // kiem tra du lieu nhap vao
  if (validateForm(email, password)) {
    // auth tu API
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
      }),
    })
      .then((res) => res.json())
      .then((data) => printUserInfo(data))
      .catch((error) => console.error("Error:", error));
  }
};

// an user info
const infoContainer = document.querySelector("#infoContainer");
infoContainer.style.display = "none";

// ham in ra du lieu user
function printUserInfo(user) {
  // an form dang nhap
  document.getElementById("login-form").style.display = "none";
  infoContainer.style.display = "block";

  const userInfoList = infoContainer.querySelector("#userInfo");
  // xoa du lieu cu
  userInfoList.innerHTML = "";
  // hien thi thong tin user (for in)
  let html = [];
  for (const key in user) {
    // neu ton tai gia tri cua key
    if (user[key]) {
      // them vao mang html
      html.push(
        `<li class="list-unstyled"><strong>${key}</strong> ${user[key]}</li>`
      );
    }
  }
  // chuyen thanh string -> gan vao user infor list
  const htmlString = html.join("");
  userInfoList.innerHTML = htmlString;
  // for of
  // for (const [key, value] of Object.entries(user)) {
  //     ...
  // }
}
