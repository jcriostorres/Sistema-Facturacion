import Electrodomestico from "./Electrodomestico.js";

export class Nevera extends Electrodomestico{

    constructor(consumo, capacidad, esNacional){
        super(consumo, esNacional);
        this.capacidad = capacidad;
        this.Precionevera =this.PrecioNevera;
    }

    

    get PrecioNevera()
    {     
        
        if(this.capacidad >120)
        
        {
            alert("jlkjlkj");
            
             this.CapacidadExcedida = parseInt((this.capacidad-120)/10);
             this.PorcentajePrecio = super.CalcularPrecioFinal*5/100;
             this.ValorAdicional = this.CapacidadExcedida*this.PorcentajePrecio;
               return this.Precionevera = super.CalcularPrecioFinal + this.ValorAdicional;

        }
        else
        {
            return super.CalcularPrecioFinal;    
        }
    }
}