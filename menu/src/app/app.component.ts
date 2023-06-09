import { Component, OnInit } from '@angular/core';
import { Piatti } from './models/piatti.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: Piatti;
  serviceURL: string = 'https://my-json-server.typicode.com/paolocarugati/semivuota/db';
  oECommerce: Observable<Piatti>;

  constructor(public http: HttpClient) {
  }


  ngOnInit() : void {
    
    this.oECommerce = this.http.get<Piatti>(this.serviceURL);
    this.oECommerce.subscribe(d => {this.data = d;});
  } 
}
