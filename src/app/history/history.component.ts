import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  turnos = [
    { fecha: new Date(2025, 5, 20), hora: '10:00', descripcion: 'Corte de cabello', tipo: 'corte' },
    { fecha: new Date(2025, 4, 15), hora: '14:30', descripcion: 'Arreglo de barba', tipo: 'barba' },
    { fecha: new Date(2025, 3, 30), hora: '09:00', descripcion: 'Corte y barba', tipo: 'corte-barba' },
  ];
}
