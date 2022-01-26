import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  liste:any;

  constructor() { 
    this.liste = [
      {id:1, nom:'Action',description: "this is a good carnet ",document: "doc01"},
      {id:2, nom:'combat',description: "this is a bad carnet ", document: "doc02"},
      {id:3, nom:'howdy',description: "i dont know about this carnet", document: "doc02"},
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
}
