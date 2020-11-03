import { Automovil} from './clases/automovil'
import { menu, menu2 } from './views/menu'
import { leerTeclado } from './views/entradaTeclado'




const main = async() => {

    let coches: Array<Automovil> = new Array()
    let n: number 

    do {

        n = await menu()

        switch(n){

            case 1:
                console.log('Usted desea crear un nuevo automovil')
                let identificador:number , consumo:number, gasolina:number
    
                try {

                    identificador = parseInt(await leerTeclado('Introduzca un identificador para el automovil'))
                    consumo = parseFloat( await leerTeclado('Introduzca el consumo del automovil por cada 100km'))
                    gasolina = parseFloat(await leerTeclado('Introduzca la cantidad de gasolina de un automovil'))
                    let coche=new Automovil(identificador, consumo, gasolina)
                    let existe = false

                    coches.forEach(Coche => {

                        if (coche.Identificador==Coche.Identificador){
                            existe=true
                        }

                    })

                    if (existe){

                        console.log('Introduzca un automovil nuevo, este ya existe')

                    } else{

                        coches.push(coche)

                    }

                } catch (error) {

                    console.log(error)

                }
                break

            case 2:

                if (coches.length==0){

                    console.log('No hay ningún automovil creado, cree uno antes')

                } else {

                    console.log('Usted ha elegido mostrar la lista de automoviles')

                    coches.forEach(Coche => {

                        console.log(`${Coche.imprimir()}`)

                    })
                }
                break

            case 3:

                console.log('Usted ha elegido eliminar un automovil')

                if (coches.length==0){

                    console.log('No hay ningún automovil creado, cree uno antes')

                } else { 

                    console.log('Automoviles creados:')
                    coches.forEach(Coche => {

                        console.log(`${Coche.imprimir()}`)

                    })

                    let ide1:number
                    ide1= parseInt(await leerTeclado('Introduzca el identificador del automovil que desea eliminar'))
                    let existe:boolean=false
                    let index=0
                    
                    coches.forEach(Coche => {

                        if (ide1==Coche.Identificador){

                            index=coches.indexOf(Coche)
                            existe=true

                        }
                    })
                    if (existe){

                       coches.splice(index,1)

                    } else {

                        console.log('Ha seleccionado un automovil a eliminar inexistente')

                    }
                }
                break

            case 4:

                if (coches.length==0){

                    console.log('No hay ningun automovil creado, cree uno antes ')

                } else {

                    let ide:number
                    console.log('Seleccione el identificador del automovil para modificarlo')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimir()}`)

                    })

                    ide= parseInt(await leerTeclado('Introduzca el identificador del automovil'))
                    let index:number=-1
                    coches.forEach(Coche => {

                        if(Coche.Identificador==ide){

                           index=coches.indexOf(Coche)

                        }
                    })
                    
                    if(index!=-1){

                        let n2:number
                        let sCoche=coches[index]

                        do {

                            n2 = await menu2()
                            switch(n2){

                                case 1: 
                                    console.log('Procedemos a mostrar el automovil elegido:')
                                    console.log(sCoche.imprimir())
                                    break

                                case 2: 

                                    if(sCoche.Encendido){

                                        try {

                                            sCoche.cArrancado()
                                            console.log('Procedemos a desactivar el automovil')

                                        } catch (error) {

                                            console.log(error)

                                        }

                                    }else{

                                        console.log('Procedemos a arrancar el automovil')
                                        sCoche.cArrancado()

                                    }
                                    break

                                case 3: 

                                    let vel:number
                                    vel=parseInt(await leerTeclado("Seleccione la nueva velocidad del automovil"))

                                    try {

                                      sCoche.Velocidad=vel 

                                    } catch (error) {

                                        console.log(error)

                                    }
                                    break

                                case 4:

                                    let tiempo:number
                                    try {

                                        tiempo=parseInt(await leerTeclado("Para calcular el consumo, introduzca el tiempo que lleva el automovil a la velocidad actual"))
                                        console.log(`El automovil ha gastado ${sCoche.consumido(tiempo)} litros de gasolina`)

                                    } catch (error) {

                                        console.log(error)

                                    }
                                    break

                                case 0:

                                    console.log('\nVolvemos al menu principal')
                                    break

                                default:

                                    console.log("Opción incorrecta")
                                    break

                            }

                        } while (n2!=0);

                    } else{

                        console.log('ERROR. Este automovil NO existe')

                    }
                }
                break

            case 0:

                console.log('\nSaliendo')
                break

            default:

                console.log("Opción incorrecta")
                break

        }
    } while (n!=0);
}

main()
