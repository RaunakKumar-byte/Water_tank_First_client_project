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
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', // Always scroll to top on navigation
    anchorScrolling: 'enabled' // Enable anchor scrolling
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
