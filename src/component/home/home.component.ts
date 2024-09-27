import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
