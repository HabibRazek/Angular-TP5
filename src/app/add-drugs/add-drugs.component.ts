import { Component, OnInit } from '@angular/core';
// import drugs from model folder
import { drugs } from 'src/model/drugs.model';
// import drug service
import { DrugService } from '../services/drug.service';

@Component({
  selector: 'app-add-drugs',
  templateUrl: './add-drugs.component.html',
  styleUrls: ['./add-drugs.component.css'],
})
export class AddDrugsComponent implements OnInit {
  newDrugs = new drugs();

  constructor(private drugService: DrugService) {}

  ngOnInit(): void {}
  newDrug = new drugs();
  addDrug() {
    // add drug
    this.drugService.ajouterDrug(this.newDrug);
  }
}
