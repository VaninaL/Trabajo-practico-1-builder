import { computadoraBuilder } from "./interfaz";

const usuarioPc = new computadoraBuilder()
const usuario1 = usuarioPc.setProcesador("intel core i3").setRAM(16).setAlmacenamiento("1tb ssd").setTarjetaGrafica("Nvidia rtx 4060").setSistemaOperativo("Windows 11").build();
console.log(usuario1.MostrarPc())