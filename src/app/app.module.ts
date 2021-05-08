import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpInterceptorService} from './admin/login/login-service/http-interceptor/http-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
      },
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
