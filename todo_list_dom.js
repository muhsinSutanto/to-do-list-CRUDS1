const container = document.getElementById("container")// container todo list
const inputTodo = document.getElementById("inputTodo")// input dari user
const submitButton = document.getElementById("submitButton")// tombol submit

// Event Listener ---------------------------------------
submitButton.addEventListener("click",add) 

// Array of object data todo list
let todos = []

function add() {
    let description = inputTodo.value

    todos.push({
        description: description,
        done: false
    })

    read()
}

function read() {
    let todoList = ""
    todos.forEach(function (todo) {
        todoList = todoList + `<div>${todo.description}</div>`
    })
    container.innerHTML = todoList
}

function update(index, key, value) {
    todos[index][key] = value
}

function remove(index) {
    todos.splice(index, 1)
}

function search1(key, value) {
    let result = todos.filter(
        function (todo) {
            return todo[key] === value
        }
    )
    console.log(result)
}

function search2(key, value) {
    let result = todos.filter(
        function (todo) {
            if (typeof todo[key] === "string") {
                return todo[key].toLowerCase().includes(value.toLowerCase())
            } else {
                return todo[key] === value
            }
        }
    )
    console.log(result)
}

read()



















