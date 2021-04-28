import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const isAdmin = localStorage.getItem('isAdmin');

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lazy.admin.module').then(m => m.LazyAdminModule),
  }
];

const routes2: Routes = [{
  path: '',
  loadChildren: () => import('./lazy.publisher.module').then(m => m.LazyPublisherModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(isAdmin ? routes : routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
