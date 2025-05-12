"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computadora = void 0;
var computadora = /** @class */ (function () {
    function computadora(pProcesador, pRAM, pAlmacenamiento, pTrajetaGrafica, pSistemaOperativo) {
        this.procesador = pProcesador;
        this.RAM = pRAM;
        this.almacenamiento = pAlmacenamiento;
        this.tarjetaGrafica = pTrajetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;
    }
    computadora.prototype.MostrarPc = function () {
        return " PROCESADOR: " + this.procesador + " RAM: " + this.RAM + " GB " + " ALMACENAMIENTO: " + this.almacenamiento + " TARGETA GRAFICA: " + this.tarjetaGrafica + " SISTEMA OPERATIVO: " + this.sistemaOperativo;
    };
    return computadora;
}());
exports.computadora = computadora;
;
