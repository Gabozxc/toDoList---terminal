const colors = require('colors'),
      todoCli = require('./my_modules/todo-commads').argv,
      todoList = require('./my_modules/todo-list'),
      c = console.log,
      {Create, Read, Delete, Update} = todoList

let   TodoCommand = todoCli._[0]

switch(TodoCommand){
      case 'create':
            let todo = Create(todoCli.description)
            console.log(todo.blue)
            break;
      case 'read':
            const todos = Read()
            for(let todo of todos){
                  if(todo.completed === true || todo.completed === 'true'){
                        c(colors.green('X', todo.description))
                  }else {
                        c(colors.red('♦', todo.description))
                  }
                  
            }
            break;
      case 'update':
            let update = Update(todoCli.description, todoCli.completed)
            console.log(update.blue)
            break;
      case 'delete':
            let del = Delete(todoCli.description)
            console.log(del.green)
            break;
      default:
            console.log('El comando no existe, ejecuta --help ver los comandos'.rainbow)
      break;
}

