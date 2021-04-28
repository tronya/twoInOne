import {NgModule} from '@angular/core';
import {PublisherComponent} from './publisher.component';
import {PublisherRoutingModule} from './publisher-routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    PublisherComponent
  ],
  imports: [
    PublisherRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    PublisherComponent
  ]
})
export class PublisherModule {
}
