import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaMovimientoComponent } from './lista-movimiento/lista-movimiento.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'ListaMovimiento', component: ListaMovimientoComponent },
  { path: 'tabla', component: TablaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
