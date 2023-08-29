import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter(); /** permite emitir este componente hacia el padre */

  @Input()
    public characterList: Character [] = [{
      id:'',
      name: '',
      power: 0
    }]

    onDeleteId(id?:string): void {
      // console.log( 'list' );
      // console.log( {id} );
      if (!id) return;
      this.onDeleteCharacter.emit( id ); /** aqui emite character hacia el padre */

    }


}
