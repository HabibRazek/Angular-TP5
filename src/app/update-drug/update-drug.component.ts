import { Component, OnInit } from '@angular/core';
// ActivatedRoute
import { ActivatedRoute, Router } from '@angular/router';
// Sevecices
import { DrugService } from 'src/app/services/drug.service';
// drugs
import { drugs } from 'src/model/drugs.model';

@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css'],
})
export class UpdateDrugComponent implements OnInit {
  currentDrug = new drugs();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private drugService: DrugService
  ) {}

  ngOnInit(): void {
    this.currentDrug = this.drugService.consulterDrug(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentDrug);
  }

  updateDrug() {
    //console.log(this.currentProduit);
    this.drugService.updateDrug(this.currentDrug);
    this.router.navigate(['drugs', this.currentDrug]);
  }
}
