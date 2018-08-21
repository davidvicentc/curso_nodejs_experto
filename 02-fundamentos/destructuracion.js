let deadpool = {
    nombre: 'wade',
    apellido: 'widston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} tiene un poder de ${this.poder} `
    }
}

/* let nombre = deadpool.nombre
let apellido = deadpool.apellido
let poder = deadpool.poder */

let { nombre: primerNombre, apellido, poder } = deadpool

console.log(primerNombre, apellido, poder)