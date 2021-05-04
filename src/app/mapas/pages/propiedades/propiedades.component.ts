import { Component, OnInit } from '@angular/core';
interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent  {

  propiedades: Propiedad[] = [
    {
      titulo: 'Oficina Plaza de la Campana',
      descripcion: 'Oficina situada en el corazon de la ciudad de Sevilla',
      lngLat: [  -5.995408067227933, 37.39271615024197]
      
    },
    {
      titulo: 'Casa en la Plaza de San Francisco Sevilla',
      descripcion: 'Hermosa casa con grandes vistas al casco historico de la ciudad de Sevilla',
      lngLat: [-5.994077745208148, 37.38900313965466], 
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Sevilla, situado enfrente de la Catedral',
      lngLat: [ -5.994057913159422, 37.38535259293896 ], 
      
    },
  ]


}
