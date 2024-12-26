import { Component } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  fechas = { fech_ini: '', fech_fina: '' };
  respuesta: any;

  constructor(private gastosService: GastosService) {}

  enviarFechas() {
    if (this.fechas.fech_ini && this.fechas.fech_fina) {
      // Eliminar los guiones de las fechas
      const formattedFechas = {
        fech_ini: this.fechas.fech_ini.replace(/-/g, ''), // Eliminar guiones
        fech_fina: this.fechas.fech_fina.replace(/-/g, '') // Eliminar guiones
      };

      this.gastosService.grabarFechas(formattedFechas).subscribe(
        (data) => {
          this.respuesta = data;
        },
        (error) => {
          console.error('Error al llamar al API', error);
        }
      );
    }
  }
}