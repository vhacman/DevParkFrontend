import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KidPreview } from './kid-preview/kid-preview';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KidPreview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DevParkFrontend');
}
