import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>
      import ('./pages/pages-module').then(m=>m.PagesModule)
  },

  // Optionally add other lazy-loaded modules here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
