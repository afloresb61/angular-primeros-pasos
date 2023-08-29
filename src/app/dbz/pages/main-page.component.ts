
import { Component, OnInit } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

  constructor(private dbzService : DbzService) {
   }

   get characters(): Character[] {
    return [ ...this.dbzService.characters]; /** obtiene una copia. Los tres ... copia de todos los elementos y propiedades */
   }

   onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
   }

   onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
   }

  ngOnInit() { }
}
