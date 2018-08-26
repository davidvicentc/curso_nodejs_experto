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


let getEmpleados = async (id) => {
    let empleadoDB = await empleados.find(empleado => empleado.id === id)
    
    if (!empleadoDB) {
        throw new Error(`no existe un empleado con id ${id}`)
    } else {
        return empleadoDB
    }
}

let getSalario = async (empleado) => {
    let salarioDB = await salarios.find( salario => salario.id === empleado.id )

    if(!salarioDB) {
        throw new Error(`no se encuentra salario para el empleado: ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }
}

let getMessage = async (id) => {
    let empleado = await getEmpleados(id)
    let resp = await getSalario(empleado)

    return `${resp.nombre} tiene un salario de ${resp.salario}`
}

getMessage(3)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))