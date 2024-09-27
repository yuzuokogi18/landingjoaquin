import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { TipostortugasComponent } from '../component/tipostortugas/tipostortugas.component';
import { InteresantesComponent } from '../component/interesantes/interesantes.component';

export const routes: Routes = [
    {path:'tipostortuga', component:TipostortugasComponent},
    {path:'datosinteresantes', component: InteresantesComponent},
    {path:'', component: HomeComponent}
];
