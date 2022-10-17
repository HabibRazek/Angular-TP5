import { Component, OnInit } from '@angular/core';
import { drugs } from 'src/model/drugs.model';
import { DrugService } from '../services/drug.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css'],
})
export class DrugsComponent implements OnInit {
  drugs: drugs[];
  constructor(private drugService: DrugService) {
    this.drugs = drugService.listeDrugs();
  }

  ngOnInit(): void {}
  supprimerProduit(d: drugs) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.drugService.supprimerDrug(d);
  }
}
