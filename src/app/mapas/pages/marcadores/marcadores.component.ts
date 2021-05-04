import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color:string;
  marcador?: mapboxgl.Marker;
  centro?:[number,number];
}

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

  //Arreglo de Marcadores
  marcadores:MarcadorColor[] = []
  constructor() { }


  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divmapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.leerMarcador()

    const markerHtml:HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'GiraldaTV';

    const marker = new mapboxgl.Marker({
      element:markerHtml
    })
    .setLngLat(this.center)
    .addTo(this.mapa);

    
  }

  irMarcador(marcador:MarcadorColor){
    this.mapa.flyTo({
      center:marcador.marcador.getLngLat()
    })
  }

  agregarMarcador(){
    
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    console.log(color)
    const NuevoMarcador = new mapboxgl.Marker({
      draggable:true,
      color:color
    }).setLngLat(this.center).addTo(this.mapa)

    this.marcadores.push({
      color,
      marcador:NuevoMarcador
    })

    this.guardarMarcadores()
  }

  guardarMarcadores(){

    const lngLatArr:MarcadorColor[] = []

    this.marcadores.forEach(m =>{
      const color = m.color;
      const {lng,lat} = m.marcador!.getLngLat();

      lngLatArr.push({
        color:m.color,
        centro:[lng,lat]
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));


    
  }

  leerMarcador(){

    if(!localStorage.getItem('marcadores')){
      return;
    }

    const lngLatArr: MarcadorColor[] =JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach(m=> {
      const newMarker = new mapboxgl.Marker({
        color:m.color,
        draggable:true
      })

      .setLngLat(m.centro!)
      .addTo(this.mapa)

      this.marcadores.push({
        marcador:newMarker,
        color:m.color
      })

    })

  }



}
