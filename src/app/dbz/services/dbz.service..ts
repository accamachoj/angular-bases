import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService{

  public characters: Character[] = [{
    id: uuid(),
    name: 'krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'goku',
    power: 9000
  }, {
    id: uuid(),
    name: 'Vegueta',
    power: 10
  }];

  addNewCharacter ( character: Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);

  }

  onDeleteCharacter ( id: string){
    this.characters = this.characters.filter(character => character.id != id);
  }

}
