
let tasks = [{
    title: "Learn English",
    date: "20/22/2024",
    completed: false
},
{
    title: "Learn English",
    date: "20/22/2024",
    completed: false
},
{
    title: "Learn English",
    date: "20/22/2024",
    completed: false
}
]



function fillTasks() {

    document.getElementById("EnterTask").value = ""  //empty 
    document.getElementById("tasks").innerHTML = ""
    let index = 0
    for (let task of tasks) {
        let content = ` <div id="Task">
                          <div id ="TaskInfo">
                               <h3  class = " title ${task.completed ? "completed" :  "" }" >${task.title}</h3>
                               <span>${task.date}</span>
                               </div>
                                    <div style=" display:flex ;margin-left: 5%;margin-right: 5%;  justify-content: flex-end; gap: 10px;">
                                          <button class = "button" onclick="TaskDone(${index})" style="background-color: rgb(255, 255, 255);background :transparent;"><span class="material-symbols-outlined">task_alt</span></button>
                                          <button class = "button"  onclick ="Modify(${index})"style="background-color: rgb(255, 255, 255);background :transparent;"><span class="material-symbols-outlined">edit_square</span></button>
                                          <button class ="button" onclick ="Delete(${index})"style="background-color: rgb(255, 255, 255); background :transparent ;"><span class="material-symbols-outlined">delete</span></button>
                                    </div>
                                </div>`
        document.getElementById("tasks").innerHTML += content
        index++
    }
}

fillTasks()

function MyFunction() {


    let value = document.getElementById("EnterTask").value

    if (value == "") {
        alert("You Must Enter Something")
    }
    else {
        let now = new Date()
        console.log(now)
        let date = (now.getDay()) + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " | " + now.getHours() + ":" + now.getMinutes()

        console.log(date)
        let task = {
            title: value,
            date: date
        }

        tasks.push(task)



        fillTasks()
        console.log("After Add:", tasks);
    }

}



// with this in paramters of the function 
//  function Delete (){
//      element = document.getElementById("Task") 
//      console.log(element)
//      element.remove()
//  }




console.log("Before Add:", tasks);



function Delete(index) {

    let task = tasks[index]
    console.log("Before delete:", tasks);
    let result = confirm("want to delete " + task.title)

    if (result) {
        tasks.splice(index, 1)
        fillTasks()
    }

    console.log("After delete:", tasks);

}


function Modify(index) {

    let task = tasks[index]
    edit = prompt("Edit what you want", task.title)
    task.title = edit
    console.log(tasks)





}



function TaskDone(index) {
    let task = tasks[index]
    task.completed = true
    fillTasks()

    
}








