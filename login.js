const p = document.querySelector(".sbtn");
const greeting = document.querySelector(".greeting");
const div = document.querySelector(".tab");
let a = false;


p.addEventListener("click", () => {
    if(!a){
        div.style.left = "20%"
        a = true
        p.textContent = "Login"
        greeting.textContent = "Sign Up Please"
    }
    else{
        a = false;
        div.style.left = "50%"
        p.textContent = "Sign Up";
        greeting.textContent = "Welcome User"
    }
})