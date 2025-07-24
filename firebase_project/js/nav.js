import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { app } from "./firebase_config.js";

// ------------------------
// quy dinh danh sach link cho nav
const links = [
    { text: "Home", url: "./index.html" },
    { text: "Users", url: "./pages/users.html" },
    { text: "Products", url: "./pages/products.html" },
    { text: "Orders", url: "./pages/orders.html" },
    { text: "Login", url: "./pages/login.html" },
    { text: "Logout", url: "./index.html" },
];

// -------------------------------
// ham hien thi nav len UI
async function showNav() {
    // kiem tra nguoi dung da dang nhap chua
    await isLogedIn().then((userInfo) => {
        console.log(userInfo);
        let linksClone = [];
        // kiem tra duong link hien tai
        const isSubUrl = window.location.href.includes("pages");
        if (userInfo) {
            // clone danh sach link -> cat login link
            linksClone = links.filter((link) => link.text != "Login");
            // show info
            showUserInfo(userInfo.email, userInfo.uid);
            //them ham logout
            linksClone.map((link) => {
                if (link.text == "Logout") {
                    link.clickedFunc = logout;
                }
            });
        } else {
            linksClone = links.filter((link) => link.text != "Logout");
        }
        // hien thi len UI
        const nav = document.querySelector("#nav");
        linksClone.forEach((link) => {
            // tao tag a
            const a = document.createElement("a");
            a.style = "margin: 10px; text-decoration: none;";
            a.href = isSubUrl ? "." + link.url : link.url;
            a.innerText = link.text;
            // bat su kien cho click
            a.addEventListener("click", function (e) {
                link.clickedFunc();
            });
            // chen vao nav
            nav.appendChild(a);
        });
    });
}

showNav();

// ------------------------------
// ham kiem tra current user tu firebase
async function isLogedIn() {
    const auth = getAuth(app);
    // tao promise cho phan bat dong bo
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve({
                    uid: user.uid,
                    email: user.email,
                    photoURL: user.photoURL,
                });
            } else {
                resolve(false);
            }
        });
    });
}

// -----------------------------------
// hien thi thong tin nguoi dung (arrow function)
const showUserInfo = (email, uid) =>
    (document.querySelector("#username").innerText = `${email} - ${uid}`);

// -----------------------------------
// logout
async function logout() {
    const auth = getAuth(app);
    await signOut(auth)
        .then(() => {
            const isSubUrl = window.location.href.includes("pages");
            const homeLink = links.filter((link) => link.text == "Home")[0];
            location.href = isSubUrl ? "." + homeLink.url : homeLink.url;
        })
        .catch((error) => {
            // An error happened.
            console.error(error);
        });
}