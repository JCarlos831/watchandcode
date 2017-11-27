var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log("My todos: ", this.todos)
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    }
};

// function changeTodo(position, newValue){
//     todos[position] = newValue;
//     displayTodos();
// }

// function deleteTodo(position){
//     todos.splice(position, 1);
//     displayTodos();
// }

// var myComputer = {
//     operatingSystem: "mac",
//     screenSize: "15 inches", 
//     purchaseYear: 2011
// };

// var juan = {
//     name: "Juan",
//     sayName: function(){
//         console.log(this.name)
//     }
// };