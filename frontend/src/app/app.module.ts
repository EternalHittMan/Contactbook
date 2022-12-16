import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    NavbarComponent,
    NavbarBottomComponent,
    ContactInfoComponent,
    AddContactComponent,
    AlertBoxComponent,
    FavoriteComponent,
    FavoriteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
