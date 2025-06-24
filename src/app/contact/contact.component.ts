import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // <--- Agregá esta línea

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IonicModule], // <--- Agregá CommonModule acá también
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent { }
