export class Automovil {

    static push: any
    static forEach(a: (Automovil: { Id: any }) => void) {

        throw new Error('error')

    }

    private id : any
    private gasto : number
    private gasol: number 
    private encendido : boolean 
    private velocidad : number

    constructor (id:any, gasto:number, gasol:number){

        this.id = id
        this.gasto = gasto
        this.gasol = gasol
        this.encendido = false 
        this.velocidad = 0

    }

    get Id(){

        return this.id

    }

    get Gasto(){

        return this.gasto

    }

    get Encendido(){

        return this.encendido

    }

    get Gasol(){

        return this.gasol

    }

    set Gasol(c:number){

        if(this.gasol <= 0){

            throw 'El deposito no tiene gasolina'

        }
        this.gasol=c

    }

    cArrancado(){

        if(this.Encendido==false){

            this.encendido=true

        }else{

            if (this.velocidad!=0){

                throw 'La velocidad del automovil debe ser 0 para desactivarlo'

            } else {

                this.encendido=false

            }
        }
    }

    get Velocidad(){

        return this.velocidad

    }

    set Velocidad(num:number){

        if(this.encendido==false){

            throw 'Para cambiar la velocidad el automovil debe estar en funcionamiento'

        } else {

            this.velocidad=num

        }
    }
   
    gastado(t:number){ 

        if(!this.encendido || this.velocidad==0){

            throw 'No puede calcular el consumo del automovil estando desactivado'

        } else {

            return (this.velocidad/t)*(this.gasto/100)

        }
    }
   
    imprimir(){

        return `El automovil con identificador ${this.id} va a ${this.velocidad} km/h y consume ${this.gasto} litros de gasolina cada 100 km`

    }

}
