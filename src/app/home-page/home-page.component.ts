import { Component, OnInit } from '@angular/core';
import {CarnetService} from '../services/carnets/carnet.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  liste:any
  searchText:any
  constructor(public carnetService: CarnetService) { }

  ngOnInit(): void {
    this.liste = this.carnetService.getListe();
  }

  delete(id:number){
    this.carnetService.deleteCarnet(id);
  }
}

