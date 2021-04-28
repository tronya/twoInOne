import {NgModule} from '@angular/core';
import {PublisherModule} from '../../projects/publisher/src/lib/publisher.module';

@NgModule({
  imports: [PublisherModule],
  exports: [PublisherModule]
})

export class LazyPublisherModule{}
