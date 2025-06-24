import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // <--- Agregá esta línea

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonicModule], // <--- Agregá CommonModule acá también
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent { }

