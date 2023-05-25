import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Primo } from '../models/piatti.model';

@Component({
  selector: 'app-primi',
  templateUrl: './primi.component.html',
  styleUrls: ['./primi.component.css']
})
export class PrimiComponent {
  primi: Primo[];

  constructor(private router:Router) {
    this.primi = this.router.getCurrentNavigation().extras.state as Primo[];
  }
}
