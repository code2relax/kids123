import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Numbers } from '../pages/numbers/numbers';
import { Alphabets } from '../pages/alphabets/alphabets';
import { Shapes } from '../pages/shapes/shapes';
import { Colors } from '../pages/colors/colors';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Numbers,
    Alphabets,
    Colors,
    Shapes
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Numbers,
    Alphabets,
    Colors,
    Shapes
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
