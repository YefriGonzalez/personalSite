import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `.container{
      background: #EAF2FD;
    }`
  ]
})
export class AboutComponent {
  title:string;
  @Input() darkTheme!:boolean;
  paragrapher1:string;
  paragrapher2:string;
  constructor(){
    this.title="Sobre mi";
    this.paragrapher1="Mi nombre es Yefri, soy estudiante de Ingenieria en Sistemas, actualmente trabajo en Cooperativa Salcaja como"+
    " desarrollador backend y frontend con 2 años de experiencia en desarrollo web"+
    ", tambien he tenido la oportunidad ser estudiante de Ciberseguridad en la OEA y su programa"+
    " de Ciberseguridad, a la vez fui uno de los cuatro representantes de Guatemala en el OEA Cyber Challengue 2023 que se llevo a cabo en Santiago Chile en la UChile asimismo en el año 2022 que se "+
    " llevo acabo en la Ciudad de Mexico en el Tecnologico de Monterrey Campus Santa Fe, he tenido la oportunidad de "+
    "estar en el programa Oracle Next Education y culminarlo exitosamente.";
    
    this.paragrapher2="En mis tiempos libres me gusta Ejecutar Guitarra, Bateria y Ukulele, me encanta ver series "+
    "de accion y ciencia ficcion, me gusta los videojuegos y escuchar musica. Me gusta viajar y conocer los interiores"
    +"de mi pais Guatemala.";
  }
}
