var todos = ["item 1", "item 2", "item 3"];

console.log("My todos:", todos);

todos.push("item 4", "item 5");

// todos[0] = "item 1 updated";

// todos.splice(0,1);
// todos.splice(3, 1);

// makeTurkeySandwich
//     Get one slice of bread.
//     Add Turkey.
//     Put a slice of bread on top.
    
// function makeTurkeySandwich() {
//     Get one slice of bread;
//     Add Turkey;
//     Put a slice of bread on top;
// }

// makeTurkeySandwich();

// makeSandwichWith_____
//     Get one slice of bread.
//     Add _____.
//     Put a slice of bread on top.


// function makeSandwichWith(filling){
//     Get one slice of bread;
//     Add filling;
//     Put a slice of bread on top;
// }

// makeSandwichWith_ham_
// makeSandwichWith("ham")
// // console.log("My todos: ", todos)
// function sayHiTo(person){
//     console.log("Hi", person);
// }
function displayTodos(){
    console.log("My todos: ", todos);
}

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}