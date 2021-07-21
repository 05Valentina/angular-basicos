import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: String [] = ['Spiderman','Iroman','Hulk','Thor']
  heroeBorrado: String = '';


  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift()  || '';
    
  }

}
