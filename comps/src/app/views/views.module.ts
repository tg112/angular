import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StasticsComponent } from './stastics/stastics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListsComponent } from './item-lists/item-lists.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StasticsComponent,
    ItemListsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ViewsModule { }
