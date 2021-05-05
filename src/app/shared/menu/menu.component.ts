import { Component} from '@angular/core';

interface MenuItem{
  ruta:string;
  nombre:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems:MenuItem[] = [
    {
      ruta:'/maps/fullscreen',
      nombre:'fullscreen'
    },
    {
      ruta:'/maps/zoom',
      nombre:'Zoom Range'
    },
    {
      ruta:'/maps/marcadores',
      nombre:'marcadores'
    },
    {
      ruta:'/maps/propiedades',
      nombre:'Propiedades'
    }
  ]

 

}
