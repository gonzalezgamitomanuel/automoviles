export class Automovil {

    static push: any
    static forEach(a: (Automovil: { Id: any }) => void) {

        throw new Error('error')

    }

    private id : any
    private gasto : number
    private gasol: number 
    private encend : boolean 
    private velocid : number

    constructor (id:any, gasto:number, gasol:number){

        this.id = id
        this.gasto = gasto
        this.gasol = gasol
        this.encend = false 
        this.velocid = 0

    }

    get Id(){

        return this.id

    }

    get Gasto(){

        return this.gasto

    }

    get Encend(){

        return this.encend

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

        if(this.Encend==false){

            this.encend=true

        }else{

            if (this.velocid!=0){

                throw 'La velocidad del automovil debe ser 0 para desactivarlo'

            } else {

                this.encend=false

            }
        }
    }

    get Velocid(){

        return this.velocid

    }

    set Velocid(num:number){

        if(this.encendido==false){

            throw 'Para cambiar la velocidad el automovil debe estar en funcionamiento'

        } else {

            this.velocid=num

        }
    }
   
    gastado(t:number){ 

        if(!this.encend || this.velocid==0){

            throw 'No puede calcular el consumo del automovil estando desactivado'

        } else {

            return (this.velocid/t)*(this.gasto/100)

        }
    }
   
    imprimir(){

        return `El automovil con identificador ${this.id} va a ${this.velocid} km/h y consume ${this.gasto} litros de gasolina cada 100 km`

    }

}
