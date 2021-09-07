export default class Electrodomestico {

    constructor(consumo, esNacional) {
        this.esNacional = esNacional;
       this.precio = this.calcularPrecioFinal;
        this.consumo = consumo;
        
    }
    

    calcularValorConsumo() {
        switch (this.consumo) {
            case 'A':
               
                return 450000;
            case 'B':
                return 350000;
            case 'C':
                return 250000;
            default:
                //console.log("consume no esta definido")
                return 0;
        }

    }
    calcularValorProcedencia() {
        if (this.esNacional) {
            return 250000;
        } else {
            return 350000;
        }
    }


    get calcularPrecioFinal() {
        return this.calcularValorConsumo() + this.calcularValorProcedencia();
    }
}