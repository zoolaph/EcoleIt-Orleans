import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents/documents.service';
import { Router , ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-document-update-page',
  templateUrl: './document-update-page.component.html',
  styleUrls: ['./document-update-page.component.scss']
})
export class DocumentUpdatePageComponent implements OnInit {
  form: any;
  document: any;
  constructor(public documentsService: DocumentsService, public router: Router, public route: ActivatedRoute) { 
    this.form = {
      nom:'',
      categorie:'',

    }
  }

  update() :void{
    this.documentsService.updateDocument(this.form);
    this.router.navigate(['/Documents']);
  }
  
  ngOnInit(): void {
    let id : any;
    this.documentsService.getListe();
    this.route.params.subscribe((params) => (id = params['id']));
    this.document = this.documentsService.getDocumentById(id)
    this.form = {...this.document}
  }
  

}
