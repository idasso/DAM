import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canActivate: [AuthGuard],
    redirectTo: 'dispositivos',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'dispositivos',
    pathMatch: 'full'
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'mediciones',
    loadChildren: () => import('./mediciones/mediciones.module').then( m => m.MedicionesPageModule)
  },  {
    path: 'detalle-sensor',
    loadChildren: () => import('./detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)
  },
  {
    path: 'log-riego',
    loadChildren: () => import('./log-riego/log-riego.module').then( m => m.LogRiegoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
