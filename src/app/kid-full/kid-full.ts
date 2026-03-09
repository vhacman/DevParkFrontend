import { Component } from '@angular/core';
import { Kid } from '../../model/Kid';

@Component({
  selector: 'app-kid-full',
  imports: [],
  templateUrl: './kid-full.html',
  styleUrl: './kid-full.css',
})
export class KidFull 
{
  kid: Kid = {
    id: 0,
    sprite: '',
    x: 0,
    y: 0,
    fun: 10,
    thirst: 20,
    hunger: 30,
    cash: 50,
    name: 'frisk'
  };
}
