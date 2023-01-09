import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { GridListComponent } from './grid-list/grid-list.component';

const routes: Routes = [
  {
    path: '', component: CoreComponent, pathMatch: 'full',
    children:[
      {path:'',component:GridListComponent,
    },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
