import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnets/carnet.service';
import { DocumentsService } from '../services/documents/documents.service';
import { Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-carnet-update-page',
  templateUrl: './carnet-update-page.component.html',
  styleUrls: ['./carnet-update-page.component.scss']
})
export class CarnetUpdatePageComponent implements OnInit {
  form:any
  liste:any
  carnet:any
  constructor(public router: Router, public carnetService: CarnetService,public documentsService: DocumentsService,public route: ActivatedRoute) { 
    this.form = {
      nom:'', 
      description:'',
      document:'',

    }
  }
  update() :void{
    this.carnetService.updateCarnet(this.form);
    this.router.navigate(['/Carnets']);
  }
  ngOnInit(): void {
    this.liste = this.documentsService.getListe();
    this.carnetService.getListe();
    let id : any;
    this.route.params.subscribe((params) => (id = params['id']));
    this.carnet = this.carnetService.getCarnetById(id)
    this.form = {...this.carnet}
  }
  

}
 