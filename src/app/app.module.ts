import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PicturesComponent } from './component/pictures/pictures.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FooterComponent} from './shared/footer/footer.component';
import { DetailsPictureComponent } from './component/pictures/details-picture/details-picture.component';

import {AuthenticationService} from './services/authentication.service';
import { PicturesService } from './services/pictures.service';
import { ShowDetailsComponent } from './component/pictures/show-details/show-details.component';
import { AddPictureComponent } from './component/pictures/add-picture/add-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    PicturesComponent,
    DetailsPictureComponent,
    ShowDetailsComponent,
    AddPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthenticationService, PicturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
