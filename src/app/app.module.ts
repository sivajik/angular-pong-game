import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PongComponent } from './pong/pong.component';
import { TetrisComponent } from './tetris/tetris.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { HomepageComponent } from './homepage/homepage.component';
import { CvComponent } from './cv/cv.component';
import { NumberSliderComponent } from './number-slider/number-slider.component';

const appRoutes: Routes = [
  { path: 'pong-game', component: PongComponent },
  { path: 'tetris-game', component: TetrisComponent },
  { path: 'image-slider-game', component: ImageSliderComponent },
  { path: 'number-slider-game', component: NumberSliderComponent },
  { path: 'cv', component: CvComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PongComponent,
    TetrisComponent,
    ImageSliderComponent,
    HomepageComponent,
    CvComponent,
    NumberSliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
