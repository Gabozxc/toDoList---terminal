const description = {
      demand:true,
      alias: 'd',
      desc: 'descripcion de la tarea por hacer',

},
      completed = {
            default:true,
            alias: "c",
            desc: "Cambiar el estado de la tarea"

}

const argv = require('yargs')
.command('create', 'Crear una tarea por hacer', {description})
.command('read','Lee todas las tareas por hacer')
.command('update', 'Actualiza el estado de una tarea', {description, completed})
.command('delete', 'Elimina una tarea', {description})
.help()
.argv

module.exports = {argv}