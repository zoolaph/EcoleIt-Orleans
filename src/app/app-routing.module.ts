import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { DocumentsPageComponent } from './documents-page/documents-page.component'
import { DocumentsAddPageComponent} from './documents-add-page/documents-add-page.component'
import { CarnetsAddPageComponent } from './carnets-add-page/carnets-add-page.component'


const routes: Routes = [
  {path:'Carnets', component : HomePageComponent},
  {path:'Documents', component : DocumentsPageComponent},
  {path:'Documents/Add', component : DocumentsAddPageComponent},
  {path:'Carnets/Ajouter', component : CarnetsAddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
