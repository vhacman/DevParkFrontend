import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KidFull } from '../kid-full/kid-full';

@Component({
  selector: 'app-kid-preview',
  imports: [],
  templateUrl: './kid-preview.html',
  styleUrl: './kid-preview.css',
})
export class KidPreview 
{
  
  constructor(private dialog: MatDialog) {}

  openModal() 
  {
    this.dialog.open(KidFull, 
      {
      width: '400px', // Set your desired size
      data: { name: 'My Image' } // Optional: Pass data to the modal
    });
  }
}
