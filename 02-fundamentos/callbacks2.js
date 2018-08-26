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

let getEmpleados = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe un empleado con id ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

let getSalarios = (empleado, callback) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id )

    if(!salarioDB) {
        callback(`no se encuentra salario para el empleado: ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleados(1, (err, empleado)=>{
    if(err) {
        return console.log(err);
    }
    getSalarios(empleado, (err, resp) => {
        if(err) {
            return console.log(err);
        }

        console.log(`el usuario ${resp.nombre} es de ${resp.salario}$`);
    })
})