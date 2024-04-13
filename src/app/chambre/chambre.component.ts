import { Component, OnInit } from '@angular/core';
import { Chambre } from '../../model/chambre';
import { ChambreService } from '../service/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambres: Chambre[] = []; 

  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.getAllChambres();
  }

  getAllChambres(): void {
    this.chambreService.getAllChambres()
      .subscribe(chambres => this.chambres = chambres);
  }
}