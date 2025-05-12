import { computadoraBuilder } from "./interfaz";
import { computadora } from "./computadora";

const usuarioPc = new computadoraBuilder();
const usuario1 = usuarioPc.reset().setProcesador("intel core i3").setRAM(16).setAlmacenamiento("1tb ssd").setTarjetaGrafica("Nvidia rtx 4060").setSistemaOperativo("Windows 11").build();
console.log(usuario1.MostrarPc());

const usuarioVani = new computadoraBuilder();
const usuario2 = usuarioPc.reset().setProcesador("AMD Ryzen 7 5800X").setSistemaOperativo("linux").setTarjetaGrafica("AMD Radeon RX 6700 XT").build();
console.log(usuario2.MostrarPc());
