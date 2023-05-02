import { Component, Input } from '@angular/core';
import { IExperience } from 'src/app/interfaces/i-experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences:IExperience[];
  @Input() darkTheme!:boolean;
  constructor(){
    this.experiences=[];
    this.chargueExperiences();
  }

  chargueExperiences(){
    let experience1: IExperience = {
      title:'Desarrollador Backend',
      text:'SIGEL-Insituto Nacional de Estadistica de Guatemala',
      info:'Diciembre 2022- Actualidad',
      items:['Laravel','MySql','Colaboracion con frontend en Angular','Docker','Participacion en la planificacion']
    }
    let experience2: IExperience = {
      title:'OEA Cyber Challenge',
      text:'Organizacion de los Estados Americanos-Tecnologico de monterrey',
      info:'Noviembre 2022 Ciudad de Mexico',
      items:['Explotacion de Puertos','Analisis Forense','Inyeccion de SQLI','Inyeccion de Codigo']
    }
    this.experiences.push(experience1);
    this.experiences.push(experience2);
  }
}
