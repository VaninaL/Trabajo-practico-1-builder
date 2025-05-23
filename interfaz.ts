import { computadora } from "./computadora";



export class computadoraBuilder{
public procesador:string;
public RAM:number;
public almacenamiento:string;
public tarjetaGrafica:string;
public sistemaOperativo:string;

setProcesador(pProcesador:string): computadoraBuilder {
        this.procesador = pProcesador;
        return this;
}
setRAM(pRAM:number): computadoraBuilder {
        this.RAM = pRAM;
        return this;
}
setAlmacenamiento(pAlmacenamiento:string): computadoraBuilder {
        this.almacenamiento = pAlmacenamiento;
        return this;
}
setTarjetaGrafica(pTarjetaGrafica:string): computadoraBuilder {
        this.tarjetaGrafica = pTarjetaGrafica;
        return this;
}
setSistemaOperativo(pSistemaOperativo:string): computadoraBuilder {
        this.sistemaOperativo = pSistemaOperativo;
        return this;
}
reset() {
        this.procesador = "No especificado";
        this.RAM = 0;
        this.almacenamiento = "No especificado";
        this.tarjetaGrafica = "No especificado";
        this.sistemaOperativo = "No especificado";
        return this
}
build(): computadora {
        return new computadora(this.procesador,this.RAM,this.almacenamiento,this.tarjetaGrafica,this.sistemaOperativo);
}
}