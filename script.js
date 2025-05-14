let todoInput = document.getElementById('todoInput')
let AddTodo = document.getElementById('AddTodo')
let list = document.getElementById('listOfTodos')

let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

function randerTask() {
    list.innerHTML = "";
    Tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.textContent = task
        li.onclick = () => removeTask(index)
        list.appendChild(li);
    });
}


function addTodo() {
    const singleTask = todoInput.value.trim()
    if (singleTask) {
        Tasks.push(singleTask);
        localStorage.setItem("Tasks", JSON.stringify(Tasks))
        todoInput.value = ""
        randerTask();
    }
}

function removeTask(index) {
    Tasks.splice(index, 1)
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
    randerTask();
}

randerTask();
