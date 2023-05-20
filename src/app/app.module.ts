import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightsFormComponent } from './components/flights-form/flights-form.component';
import { FlightsGridComponent } from './components/flights-grid/flights-grid.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { ApiInterceptor } from './shared/interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FlightsFormComponent,
    FlightsGridComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
