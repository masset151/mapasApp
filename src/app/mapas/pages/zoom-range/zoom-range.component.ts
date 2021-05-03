import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {

  constructor() {  }
@ViewChild('mapa')divmapa!:ElementRef
  mapa!:mapboxgl.Map;
  zoomLevel:number = 16;

  ngAfterViewInit(): void {
   

    console.log('affetViewInit')
   this.mapa = new mapboxgl.Map({
     container:this.divmapa.nativeElement,
     style:'mapbox://styles/mapbox/streets-v11',
     center:[-5.994212841007654,37.38914690571648],
     zoom:this.zoomLevel
   });

   this.mapa.on('zoom', (ev) => {
    console.log('zoom');
    const zoomActual = this.mapa.getZoom();
    this.zoomLevel = zoomActual

   });

   this.mapa.on('zoomend',(ev) => {
     if(this.mapa.getZoom() > 18 ){
       this.mapa.zoomTo(18);
     }
   })
    
  }
  zoomIn(){
    this.mapa.zoomIn();
   
  }

  zoomOut(){
    this.mapa.zoomOut();
    
  }

  zoomCambio(valor:string){

    this.mapa.zoomTo(Number(valor))

  }

}

