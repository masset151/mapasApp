import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divmapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-5.994212841007654, 37.38914690571648]

  constructor() { }


  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divmapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    const markerHtml:HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'GiraldaTV';

    const marker = new mapboxgl.Marker({
      element:markerHtml
    })
    .setLngLat(this.center)
    .addTo(this.mapa);

    
  }

  irMarcador(){
    console.log('en construcion')
  }

  agregarMarcador(){
    
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    console.log(color)
    const NuevoMarcador = new mapboxgl.Marker({
      draggable:true,
      color:color
    }).setLngLat(this.center).addTo(this.mapa)
  }



}
