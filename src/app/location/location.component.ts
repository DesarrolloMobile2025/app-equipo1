import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent { }

