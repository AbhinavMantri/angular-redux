import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
//import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import {reducers, effects} from '../store/store';
import {ColorService} from '../services/ColorService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('appStore', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects)
    //StoreDevtoolsModule.instrument()
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
