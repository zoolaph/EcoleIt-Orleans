import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  liste:any;
  searchText:any

  constructor() { 
    this.liste = [
      {id:1, nom:'Action',description: "this is a good carnet ",document: "doc01"},
      {id:2, nom:'combat',description: "this is a bad carnet ", document: "doc02"},
      {id:3, nom:'howdy',description: "i dont know about this carnet", document: "doc02"},
    ];
  }
  getListe(){
    let res = localStorage.getItem("Carnet")
    if( res != null )this.liste =JSON.parse(res)
    return this.liste
  }
  generateId(): number{
    return Date.now();
  }
  addDocument(form:any):void{
    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('Carnet',JSON.stringify(this.liste));
  }

  getCarnetById(id:  number):any{
  return this.liste.find((elem:any) => elem.id == id)
  }
  updateCarnet(form:any):void{
    const id = form.id;
    let elem = this.getCarnetById(id);
    if(!elem.id) alert("Erreur")
    else{ 
      let indice = this.liste.indexOf(elem);
      if(indice > -1) this.liste[indice] =form
      localStorage.setItem('Carnet',JSON.stringify(this.liste));
      this.getListe()
    }
  }
  deleteCarnet(id:number): void{
  let elem = this.getCarnetById(id);
  if(!elem.id) alert("Erreur")
  else{
    let indice = this.liste.indexOf(elem);
    this.liste.splice(indice,1)
    localStorage.setItem('Carnet',JSON.stringify(this.liste));
    this.getListe()
  }
  }
}
