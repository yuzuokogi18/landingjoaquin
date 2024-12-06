import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interesantes',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgFor,NgIf],
  templateUrl: './interesantes.component.html',
  styleUrls: ['./interesantes.component.css']
})
export class InteresantesComponent {
  // Datos para las tarjetas normales
  cards = [
    {
      title: 'Navegación asombrosa',
      image: 'assets/AD.jpg',
      description: `Las tortugas marinas tienen una impresionante capacidad de orientación. Después de viajar miles de kilómetros en el océano, pueden regresar a la misma playa donde nacieron para poner sus huevos, guiadas por el campo magnético de la Tierra.
                    Variedad de especies: Existen más de 300 especies de tortugas en el mundo, divididas en dos grandes grupos: las tortugas terrestres y las acuáticas. Cada una tiene adaptaciones específicas para sobrevivir en su hábitat particular.`,
      additionalInfo: `Cambio de temperatura y sexo: El sexo de las crías de muchas especies de tortugas se determina por la temperatura a la que los huevos son incubados. Temperaturas más altas suelen producir hembras, mientras que temperaturas más bajas producen machos.`
    },
    {
      title: 'Migración',
      image: 'assets/sd.jpg',
      description: `Ciclo de Vida
                    Sexo y temperatura: La temperatura de la arena determina el sexo de las crías. Temperaturas más cálidas producen hembras y temperaturas más frías, machos.
                    Crías en peligro: De cada 1,000 crías de tortuga, solo una o dos logran llegar a la edad adulta debido a la depredación y otros peligros.`,
      additionalInfo: `Longevidad y Adaptaciones
                       Vida larga: Las tortugas marinas pueden vivir entre 50 y 100 años. Algunas pueden incluso superar los 100 años en condiciones adecuadas.
                       Capacidad de adaptación: Las tortugas han sobrevivido más de 100 millones de años, viviendo desde la época de los dinosaurios hasta la actualidad.`
    }
  ];

  // Datos para las tarjetas especiales que ocupan todo el ancho
  specialCards = [
    {
      title: 'Reproducción',
      image: 'assets/xs.jpg',
      description: `Las tortugas marinas hembras siempre regresan a la misma playa donde nacieron para poner sus huevos, utilizando el campo magnético de la Tierra para orientarse.
                    Las hembras ponen entre 50 y 200 huevos por nidada. Desovan cada 2 a 4 años, y el proceso de desove ocurre varias veces durante la temporada de anidación.
                    Sus patas delanteras son grandes aletas que les permiten nadar rápido, pero no son útiles en tierra, lo que las hace vulnerables durante la nidación.`
    }
  ];
}
