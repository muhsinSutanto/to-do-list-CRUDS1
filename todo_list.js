let todos = [
    {
        description: "Learn JavaScript",
        done: false
    },
    {
        description: "Learn React",
        done: true
    }
]

function add(todo, finish) {
    todos.push({
        description: todo,
        done: finish
    })
}

function read() {
    todos.forEach(function (todo) {
        console.log(`Todo: ${todo.description}, Done: ${todo.done} `)
    })
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

// how to get object`s value example --------------------------------------

let obj = {
    name: "gibran",
    age: 20
}
let a = "name"
// // 1
// console.log(obj.name)
// // 2
// console.log(obj['name'])
// // 3
// console.log(obj[a])


















