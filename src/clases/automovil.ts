export class Automovil {

    static push: any
    static forEach(a: (Automovil: { Identificador: any }) => void) {

        throw new Error('error')

    }

    private identificador : any
    private consumo : number
    private gasolina: number 
    private encendido : boolean 
    private velocidad : number

    constructor (identificador:any, consumo:number, gasolina:number){

        this.identificador = identificador
        this.consumo = consumo
        this.gasolina = gasolina
        this.encendido = false 
        this.velocidad = 0

    }

    get Identificador(){

        return this.identificador

    }

    get Consumo(){

        return this.consumo

    }

    get Encendido(){

        return this.encendido

    }

    get Gasolina(){

        return this.gasolina

    }

    set Gasolina(c:number){

        if(this.gasolina <= 0){

            throw 'El deposito no tiene gasolina'

        }
        this.gasolina=c

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
   
    consumido(t:number){ 

        if(!this.encendido || this.velocidad==0){

            throw 'No puede calcular el consumo del automovil estando desactivado'

        } else {

            return (this.velocidad/t)*(this.consumo/100)

        }
    }
   
    imprimir(){

        return `El automovil con identificador ${this.identificador} va a ${this.velocidad} km/h y consume ${this.consumo} litros de gasolina cada 100 km`

    }

}