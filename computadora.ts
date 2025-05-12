export class computadora{
    private procesador?:string;
    private RAM?:number;
    private almacenamiento?:string;
    private tarjetaGrafica?:string;
    private sistemaOperativo?:string;

    constructor(pProcesador?:string,pRAM?:number,pAlmacenamiento?:string,pTrajetaGrafica?:string,pSistemaOperativo?:string){
        this.procesador = pProcesador;
        this.RAM = pRAM;
        this.almacenamiento = pAlmacenamiento;
        this.tarjetaGrafica = pTrajetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;     

    }

    MostrarPc():string {
            return " PROCESADOR: " + this.procesador + " RAM: " + this.RAM + " GB " + " ALMACENAMIENTO: " + this.almacenamiento + " TARGETA GRAFICA: " + this.tarjetaGrafica + " SISTEMA OPERATIVO: " + this.sistemaOperativo;
            
        }
};