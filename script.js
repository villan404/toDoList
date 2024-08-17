const leftBox = document.querySelector(".search_box");
const rightBox = document.querySelector(".Task_box");
// const btn = document.querySelector(".button");
const imp = document.querySelector(".important");
const myday = document.querySelector(".myday");
const taskDiv2 = document.querySelector(".imptask");
const day = document.querySelector(".day")
const inputbtn = document.querySelector("#btn");
const taskinput = document.querySelector("#taskinput");
const taskdate = document.querySelector("#taskdate");
const choco = new Date()
const currentdate = choco.toLocaleString();

inputbtn.addEventListener("click",() => {


    const value1 = taskinput.value
    const value2 = taskdate.value

    if(value1 && value2)addTask(value1,value2)

    document.querySelector("#taskinput").value = "";
    document.querySelector("#taskdate").value = ''
})

// btn.addEventListener("click", () => {

// })


const addTask = (taskName,taskDate) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const para = document.createElement("P");
    para.textContent = taskName;
    // const para2 = document.createElement("p");
    // para2.textContent = currentdate;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    const dateLabel = document.createElement("p");
    dateLabel.textContent = formatDateLabel(taskDate);
    const img = document.createElement("img");
    img.src = "star.svg"

    taskDiv.appendChild(para);
    // taskDiv.appendChild(para2);
    taskDiv.appendChild(dateLabel);
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
            // const divi = taskDiv
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

const formatDateLabel = (taskDate) => {
    const today = new Date();
    const taskDueDate = new Date(taskDate);

    const diffTime = taskDueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Tomorrow";
    } else if (diffDays === -1) {
        return "Yesterday";
    } else {
        return taskDueDate.toLocaleDateString(); // Show the actual date if it's not today, tomorrow, or yesterday
    }
};