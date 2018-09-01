const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer)

  fs.writeFile('db/data.json', data, err => {
    if (err) throw new Error('no se pudo guardar')
    console.log('guardado correctamente')
  })
}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json')
    console.log(listadoPorHacer)
  } catch (error) {
    listadoPorHacer = []
  }
}

const crear = descripcion => {
  cargarDB()

  let porHacer = {
    descripcion,
    completado: false
  }

  listadoPorHacer.push(porHacer)

  guardarDB()

  return porHacer
}

module.exports = {
  crear
}
