import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {

  constructor() {  }
  ngOnDestroy(): void {
    this.mapa.off('zoom',() => {})
    this.mapa.off('zoomend',() => {})
    this.mapa.off('move',() => {})
  }
@ViewChild('mapa')divmapa!:ElementRef
  mapa!:mapboxgl.Map;
  zoomLevel:number = 16;
  center:[number,number] = [-5.994212841007654,37.38914690571648]

  ngAfterViewInit(): void {
   

    console.log('affetViewInit')
   this.mapa = new mapboxgl.Map({
     container:this.divmapa.nativeElement,
     style:'mapbox://styles/mapbox/streets-v11',
     center:this.center,
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

   this.mapa.on('move',(event) => {
    const target = event.target;
    const {lng,lat} =  target.getCenter()
    this.center = [lng,lat]
    
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

