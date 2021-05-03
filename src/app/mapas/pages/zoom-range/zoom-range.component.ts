import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {

  constructor() { console.log('constructor '+this.divmapa) }
@ViewChild('mapa')divmapa!:ElementRef
  mapa!:mapboxgl.Map;
  zoomLevel:number = 18;

  ngAfterViewInit(): void {
   

    console.log('affetViewInit')
   this.mapa = new mapboxgl.Map({
     container:this.divmapa.nativeElement,
     style:'mapbox://styles/mapbox/streets-v11',
     center:[-5.994212841007654,37.38914690571648],
     zoom:this.zoomLevel
   })
    
  }
  zoomIn(){
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom()
  }

  zoomOut(){
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom()
  }

}

