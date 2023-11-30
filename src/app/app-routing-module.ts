import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartoonsComponent } from './modulo_1/cartoons.page';
import { CharactersComponent } from './modulo_2/characters.page';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DatosComponent } from './components/datos/datos.component';

const routes: Routes = [
  {path: "cartoons", component: CartoonsComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'info', component: DatosComponent},
  {path: "", redirectTo: "/cartoons", pathMatch: "full"},
  {path: "not-found", component: NotFoundComponent},
  {path: "", redirectTo: "/not-found", pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
