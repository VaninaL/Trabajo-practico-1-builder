"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computadoraBuilder = void 0;
var computadora_1 = require("./computadora");
var computadoraBuilder = /** @class */ (function () {
    function computadoraBuilder() {
    }
    computadoraBuilder.prototype.setProcesador = function (pProcesador) {
        this.procesador = pProcesador;
        return this;
    };
    computadoraBuilder.prototype.setRAM = function (pRAM) {
        this.RAM = pRAM;
        return this;
    };
    computadoraBuilder.prototype.setAlmacenamiento = function (pAlmacenamiento) {
        this.almacenamiento = pAlmacenamiento;
        return this;
    };
    computadoraBuilder.prototype.setTarjetaGrafica = function (pTarjetaGrafica) {
        this.tarjetaGrafica = pTarjetaGrafica;
        return this;
    };
    computadoraBuilder.prototype.setSistemaOperativo = function (pSistemaOperativo) {
        this.sistemaOperativo = pSistemaOperativo;
        return this;
    };
    computadoraBuilder.prototype.build = function () {
        return new computadora_1.computadora(this.procesador, this.RAM, this.almacenamiento, this.tarjetaGrafica, this.sistemaOperativo);
    };
    return computadoraBuilder;
}());
exports.computadoraBuilder = computadoraBuilder;
