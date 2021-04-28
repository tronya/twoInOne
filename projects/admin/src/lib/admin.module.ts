import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from "@angular/material/grid-list";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    CommonModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {
}
