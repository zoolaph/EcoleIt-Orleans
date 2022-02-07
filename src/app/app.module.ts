import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TitreComponent } from './titre/titre.component';
import { DocumentsPageComponent } from './documents-page/documents-page.component';
import { DocumentsAddPageComponent } from './documents-add-page/documents-add-page.component';
import { FormsModule} from '@angular/forms';
import { TableauComponent } from './tableau/tableau.component';
import { CarnetsAddPageComponent } from './carnets-add-page/carnets-add-page.component';
import { DocumentUpdatePageComponent } from './document-update-page/document-update-page.component';
import { CarnetUpdatePageComponent } from './carnet-update-page/carnet-update-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    TitreComponent,
    DocumentsPageComponent,
    DocumentsAddPageComponent,
    TableauComponent,
    CarnetsAddPageComponent,
    DocumentUpdatePageComponent,
    CarnetUpdatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
