var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function(){
        console.log('My todos', this.todos);
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    }
}