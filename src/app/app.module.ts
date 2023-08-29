import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieApiSerrviceService } from './service/movie-api-serrvice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxUiLoaderRouterModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FooterComponent } from './footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    ScrollRevealDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    // MatFormFieldModule
    NgxSpinnerModule,
    // NgxUiLoaderModule,
    // NgxUiLoaderRouterModule.forRoot({showForeground: true}),
    LoadingBarHttpClientModule
  ],
  providers: [MovieApiSerrviceService, { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
