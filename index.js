"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaz_1 = require("./interfaz");
var usuarioPc = new interfaz_1.computadoraBuilder();
var usuario1 = usuarioPc.reset().setProcesador("intel core i3").setRAM(16).setAlmacenamiento("1tb ssd").setTarjetaGrafica("Nvidia rtx 4060").setSistemaOperativo("Windows 11").build();
console.log(usuario1.MostrarPc());
var usuarioVani = new interfaz_1.computadoraBuilder();
var usuario2 = usuarioPc.reset().setProcesador("AMD Ryzen 7 5800X").setSistemaOperativo("linux").setTarjetaGrafica("AMD Radeon RX 6700 XT").build();
console.log(usuario2.MostrarPc());
