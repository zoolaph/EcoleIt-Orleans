import { Component, OnInit } from '@angular/core';
import {DocumentsService} from '../services/documents/documents.service';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {
  liste:any;
  constructor(public documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.liste = this.documentsService.getListe();
  }
  delete(id:number){
    this.documentsService.deleteDocument(id);
  }
}
