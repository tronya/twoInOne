import {NgModule} from '@angular/core';
import {AdminModule} from '../../projects/admin/src/lib/admin.module';

@NgModule({
  imports: [AdminModule],
  exports: [AdminModule]
})

export class LazyAdminModule {
}
