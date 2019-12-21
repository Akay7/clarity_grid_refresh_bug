import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';


const routes: Routes = [
  {
    path: '',
    component: UserGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
