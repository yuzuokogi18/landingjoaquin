import { NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = [
    {
      header: 'Longevidad',
      image: 'assets/p.jpg',
      alt: 'Tortuga',
      paragraphs: [
        `Las tortugas marinas no solo son importantes para los ecosistemas marinos, sino que también tienen un profundo significado cultural para muchas comunidades costeras que dependen de ellas para su subsistencia y tradiciones.`,
        `Pueden vivir de 50 a 100 años, dependiendo de la especie y las condiciones ambientales.`,
        `Algunas especies pueden recorrer miles de kilómetros entre sus áreas de alimentación y los sitios donde desovan (ponen huevos). Por ejemplo, la tortuga laúd puede viajar más de 16,000 km en su vida.`
      ]
    },
    {
      header: 'Migración',
      image: 'assets/p.jpg',
      alt: 'Tortuga migrando',
      paragraphs: [
        `Las tortugas marinas no solo son importantes para los ecosistemas marinos.`,
        `Pueden vivir de 50 a 100 años, dependiendo de la especie y las condiciones ambientales.`,
        `Esa es la vida de las tortugas en su etapa de migración.`
      ]
    },
    {
      header: 'Migración',
      image: 'assets/p.jpg',
      alt: 'Tortuga migrando',
      paragraphs: [
        `Las tortugas marinas no solo son importantes para los ecosistemas marinos.`,
        `Pueden vivir de 50 a 100 años, dependiendo de la especie y las condiciones ambientales.`,
        `Esa es la vida de las tortugas en su etapa de migración.`
      ]
    },
    {
      header: 'Longevidad',
      image: 'assets/p.jpg',
      alt: 'Tortuga',
      paragraphs: [
        `Las tortugas marinas no solo son importantes para los ecosistemas marinos, sino que también tienen un profundo significado cultural para muchas comunidades costeras que dependen de ellas para su subsistencia y tradiciones.`,
        `Pueden vivir de 50 a 100 años, dependiendo de la especie y las condiciones ambientales.`,
        `Algunas especies pueden recorrer miles de kilómetros entre sus áreas de alimentación y los sitios donde desovan (ponen huevos). Por ejemplo, la tortuga laúd puede viajar más de 16,000 km en su vida.`
      ]
    }
  ];

}
