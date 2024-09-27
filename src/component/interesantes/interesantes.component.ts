import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interesantes',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './interesantes.component.html',
  styleUrl: './interesantes.component.css'
})
export class InteresantesComponent {

}
