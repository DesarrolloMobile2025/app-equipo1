import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turns',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent {}

