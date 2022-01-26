import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  liste: any;
  constructor() {
    this.liste = [
      {id:1, nom:'doc01',categorie: "Romans"},
      {id:2, nom:'doc02',categorie: "Essais"},
      {id:3, nom:'doc03',categorie: "Policier"},
    ];
   }
   getListe(){
     return this.liste;
   }
   generateId(): number{
     return Date.now();
   }
   addDocument(form:any):void{
     const id = this.generateId();
     form.id = id;
     this.liste.push(form);
   }
   getDocumentByNom(nom: string):any{
    let res = this.liste.map((elem:any) => elem.nom == nom)
  }
}
