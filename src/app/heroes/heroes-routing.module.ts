import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgergarComponent } from './pages/agergar/agergar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgergarComponent },
      { path: 'editar/:id', component: AgergarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: HeroeComponent },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
