const leftBox = document.querySelector(".search_box");
const rightBox = document.querySelector(".Task_box");
const btn = document.querySelector(".button");
const imp = document.querySelector(".important");
const myday = document.querySelector(".myday");
const taskDiv2 = document.querySelector(".imptask");
const day = document.querySelector(".day")
const choco = new Date()
const currentdate = choco.toLocaleString();


btn.addEventListener("click", () => {
    const taskName = prompt("Enter Task Name : ");
    if (taskName) addTask(taskName);
})


const addTask = (taskName) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const para = document.createElement("P");
    para.textContent = taskName;
    const para2 = document.createElement("p");
    para2.textContent = currentdate;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    const img = document.createElement("img");
    img.src = "star.svg"

    taskDiv.appendChild(para);
    taskDiv.appendChild(para2);
    taskDiv.appendChild(img)
    taskDiv.appendChild(checkbox);
    myday.appendChild(taskDiv);
    // rightBox.appendChild(myday);
    

    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            para.style.textDecoration = "line-through";
            para.style.textDecorationColor = "blue"
        }
        else {
            para.style.textDecoration = "none"
        }
    })

    // const stared = false;
    img.addEventListener("click", () => {
        // taskDiv.display = "none"
        // console.log(taskDiv)
        // console.log("click")

        if (taskDiv.parentElement === myday) {
            taskDiv2.appendChild(taskDiv);
        } else {
            myday.appendChild(taskDiv);
        }
    })

    
}

const addImpTask = (divname) => {
    
}

imp.addEventListener("click", () => {
    myday.style.display = "none";
    taskDiv2.style.display = "flex"
});


day.addEventListener("click", () => {
    myday.style.removeProperty("display");
    taskDiv2.style.display="none"
});