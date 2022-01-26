import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents/documents.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-documents-add-page',
  templateUrl: './documents-add-page.component.html',
  styleUrls: ['./documents-add-page.component.scss']
})
export class DocumentsAddPageComponent implements OnInit {
  form: any;
  constructor(public documentsService: DocumentsService, public router: Router) { 
    this.form = {
      nom:'',
      categorie:'',

    }
  }

  add() :void{
    this.documentsService.addDocument(this.form);
    this.router.navigate(['/Documents']);
  }

  ngOnInit(): void {
  }

  

}
