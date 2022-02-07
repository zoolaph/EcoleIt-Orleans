import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { DocumentsPageComponent } from './documents-page/documents-page.component'
import { DocumentsAddPageComponent} from './documents-add-page/documents-add-page.component'
import { CarnetsAddPageComponent } from './carnets-add-page/carnets-add-page.component'
import { DocumentUpdatePageComponent} from './document-update-page/document-update-page.component'
import { CarnetUpdatePageComponent} from './carnet-update-page/carnet-update-page.component'

const routes: Routes = [
  {path:'Carnets', component : HomePageComponent},
  {path:'Documents', component : DocumentsPageComponent},
  {path:'Documents/Add', component : DocumentsAddPageComponent},
  {path:'Carnets/Ajouter', component : CarnetsAddPageComponent},
  {path:'Documents/update/:id', component : DocumentUpdatePageComponent},
  {path:'Carnets/update/:id', component : CarnetUpdatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
