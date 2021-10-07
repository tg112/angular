import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  // moduleを定義する順番でroutingの優先度が変わる
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    ModsModule,
    ViewsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
