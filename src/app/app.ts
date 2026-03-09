import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KidPreview } from './kid-preview/kid-preview';
import { KidFull } from './kid-full/kid-full';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KidPreview, KidFull],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DevParkFrontend');
}
