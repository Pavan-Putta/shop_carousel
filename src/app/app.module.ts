import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GalleriaModule} from 'primeng/galleria';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
