import Electrodomestico from "./Electrodomestico.js";

export class Televisor extends Electrodomestico{
constructor(esSintonizador, tamanioEnPulgadas, consumo, procedencia){

    super(consumo, procedencia);
    this.esSintonizador =esSintonizador;
    this.tamanioEnPulgadas = tamanioEnPulgadas;
    this.precioTelevisor = this.calcularPrecioFinal;

}
// //metodos

// get esSintonizador() {
//     return this.esSintonizador;
// }
// set esSintonizador(nombre) {
//     this.esSintonizador = this.esSintonizador;
// }

// get tamanioEnPulgadas() {
//     return this.tamanioEnPulgadas;
// }
// set tamanioEnPulgadas(nombre) {
//     this.tamanioEnPulgadas = this.tamanioEnPulgadas;
// }

    
    get calcularPrecioFinal(){
        if(this.tamanioEnPulgadas>40){
            if(!this.esSintonizador){
                return (super.calcularPrecioFinal)*1.3;
            }else{
                return (super.calcularPrecioFinal)*1.3 + 250000;
            }
        }else{
            if(!this.esSintonizador){
                return super.calcularPrecioFinal;
            }else{
                return super.calcularPrecioFinal +250000;
            }
        }

    }

    }


