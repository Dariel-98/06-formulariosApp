import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveModule,
    SharedModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
