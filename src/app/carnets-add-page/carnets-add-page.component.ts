import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnets/carnet.service';
import { DocumentsService } from '../services/documents/documents.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-carnets-add-page',
  templateUrl: './carnets-add-page.component.html',
  styleUrls: ['./carnets-add-page.component.scss']
})
export class CarnetsAddPageComponent implements OnInit {
  form:any
  liste:any
  constructor(public router: Router, public carnetService: CarnetService,public documentsService: DocumentsService) { 
    this.form = {
      nom:'', 
      description:'',
      document:'',

    }
  }
  add() :void{
    this.carnetService.addDocument(this.form);
    this.router.navigate(['/Carnets']);
  }
  ngOnInit(): void {
    this.liste = this.documentsService.getListe();
  }

}
