import { leerTeclado } from '../views/entradaTeclado'

export const menu = async () => {

    let n: number
    console.log('\n')

    console.log('1.- Introducir un nuevo automovil')
    console.log('2.- Ver la lista de automoviles')
    console.log('3.- Eliminar un automovil')
    console.log('4.- Modificar un automovil')
    console.log('0.- Salir')

    n = parseInt( await leerTeclado('Seleccione una opcion: ') )
    return n

}

export const menu2 = async () => {

    let n: number
    console.log('\n')

    console.log('1.- Ver automovil seleccionado')
    console.log('2.- Arrancar o desactivar el automovil seleccionado')
    console.log('3.- Cambiar de velocidad el automovil seleccionado')
    console.log('4.- Calcular el consumo de gasolina del automovil seleccionado')
    console.log('0.- Salir')

    n = parseInt( await leerTeclado('SELECCIONE UNO: ') )
    return n

}
