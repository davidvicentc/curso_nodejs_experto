const argv = require('yargs')
  .command('crear', 'crear tareas', {
    descripcion: {
      alias: 'd',
      demand: true
    }
  })
  .command('actualizar', 'actualizar tarea', {
    descripcion: {
      alias: 'd',
      demand: true
    },
    completado: {
      alias: 'c',
      default: true
    }
  })
  .help().argv

module.exports = {
  argv
}
