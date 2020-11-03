export class Automovil {
    
    private _id: string
    private _gasto: number
    private _arrancado: boolean
    private _velocidad: number

    public constructor (id: string, gasto:number){
        
        this._id= id
        this._gasto= gasto
        this._arrancado= false
        this._velocidad= 0
        
    }

    public get id(){
        
        return this._id
        
    }

    public get gasto(){
        
        return this._gasto
        
    }

    public get arrancado(){
        
        return this._arrancado
        
    }

    public get velocidad(){
        
        return this._velocidad
        
    }

    public estaArrancado(){
        
        if(this._arrancado==false){
            
            this._arrancado=true
            
        }else{
            
            this._arrancado=false
            this._velocidad=0
            
        }
    }

    public set velocidad(v:number){
        
        if(this._arrancado==false){
            
            throw 'Si el automovil esta parado no cambia la velocidad'
            
        } else {
            
            this._velocidad=v
            
        }
    }

    public totalGastado(t:number){
        
        return (this._velocidad/t)*(this._gasto/100)
        
    }

    public mostrarCoche(){
        
        return `El coche con identificador ${this.id} va a una velocidad de ${this._velocidad} km/h y consume ${this._gasto} L/100 km`
    }


}
