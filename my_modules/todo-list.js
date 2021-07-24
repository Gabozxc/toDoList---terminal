const fs = require('fs'),
path = require('path'),
todoData = path.join(__dirname, 'todo-data.json');

let todos = []

console.log(todoData)

const LoadData = () => {

      try{
            todos = require(todoData)
      }
      catch(error){
            todos = []
            console.log('hubo un error')
      }

}

const SaveData = () => {

      let data = JSON.stringify(todos)

      fs.writeFile(todoData, data, error => {
            if(error) throw new Error('No se pudo guardar la tarea ', error)
      })

}

const Create = description => {

      LoadData()

      let toDo = {
            description,
            completed: false,
      }

      todos = [...todos, toDo]
      SaveData()
      return 'tarea creada'
}

const Read = () => {
      LoadData()
      return todos
}

const Update = (description, completed = true) => {
      LoadData()

      let index = todos.findIndex(todo => todo.description === description)
      if(index >= 0){
            
            todos[index].completed = completed
            SaveData()
            return 'tarea actualizada'

      }else{
            return 'no existe la tarea'
      }

}


const Delete = description => {

      LoadData()

      let newTodos = todos.filter(todo => todo.description !== description)

      if(todos.length === newTodos.length) return 'no existe la tarea'

      todos = newTodos
      SaveData()
      return 'tarea eliminada'
}

module.exports = {
      Create,
      Read,
      Delete,
      Update
}