const p = document.querySelector(".sbtn");
const greeting = document.querySelector(".greeting");
const div = document.querySelector(".tab");
const img = document.querySelector("img");
const signup = document.querySelector("#signupform")
const login = document.querySelector("#loginorm")
let a = false;
let b = false;

p.addEventListener("click", () => {
    if (!a) {
        div.style.left = "20%"
        a = true
        p.textContent = "Login"
        greeting.textContent = "Sign Up Please"
    }
    else {
        a = false;
        div.style.left = "50%"
        p.textContent = "Sign Up";
        greeting.textContent = "Welcome User"
    }
})

img.addEventListener("click", () => {
    if (!b) {
        b = true;
        signup.style.height = "50vh"
        signup.style.overflow = "visible"
    }
    else{
        signup.style.height = "0"
        signup.style.overflow = "hidden"
        b = false
    }
})