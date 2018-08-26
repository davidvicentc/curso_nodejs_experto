let empleados = [{
    id: 1,
    nombre: 'juan'
},{
    id: 2,
    nombre: 'david',
},{
    id: 3,
    nombre: 'jorge'
}]

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}]


let getEmpleados = (id) => {


    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
    
        if (!empleadoDB) {
            reject(`no existe un empleado con id ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id )

        if(!salarioDB) {
            reject(`no se encuentra salario para el empleado: ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}

getEmpleados(4).then(empleado => {

        return getSalario(empleado)

    })
    .then(res => {
        console.log(`el empleado ${res.nombre} tiene un salario de ${res.salario}`)
    })
    .catch(err => console.log(err))

