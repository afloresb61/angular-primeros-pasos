import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): String {
    return this.name.toUpperCase();
  }

  getHeroDescription(): String {
     return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    /** esto es a modo de ejemplo
     * angular no detecta el one way data binding
     * al cambiar de esta forma los valores en el html
     * los *ngIf no operan como se espera
     * esto es realizar programacion pura javaScript
     * -- intentar siempre utilizar type script para programar los cambios
     */
    // document.querySelectorAll('h1').forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
