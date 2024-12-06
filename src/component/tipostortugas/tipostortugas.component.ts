import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tipostortugas',
  standalone: true,
  imports: [FooterComponent, RouterLink, RouterOutlet,NgFor],
  templateUrl: './tipostortugas.component.html',
  styleUrl: './tipostortugas.component.css'
})
export class TipostortugasComponent {
  tortugas = [
    { name: 'TORTUGA CAGUAMA', image: 'assets/c.jpg', alt: 'Tortuga Caguama' },
    { name: 'TORTUGA LAUD', image: 'assets/s.jpg', alt: 'Tortuga Laud' },
    { name: 'TORTUGA GOLFINA', image: 'assets/x.jpg', alt: 'Tortuga Golfina' },
    { name: 'TORTUGA VERDE', image: 'assets/ttv.jpg', alt: 'Tortuga Verde' },
    { name: 'TORTUGA CAREY', image: 'assets/ttc.jpg', alt: 'Tortuga Carey' },
    { name: 'TORTUGA LORA', image: 'assets/x.jpg', alt: 'Tortuga Lora' }
  ];
}
