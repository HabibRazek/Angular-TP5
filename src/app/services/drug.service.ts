import { Injectable } from '@angular/core';
// impor drug from model
import { drugs } from 'src/model/drugs.model';

@Injectable({
  providedIn: 'root',
})
export class DrugService {
  drugs: drugs[]; // un tableaux de drug
  constructor() {
    this.drugs = [
      {
        id: 1,
        genericName: 'Acetaminophen',
        brandNames: 'Actamin',
        dosageForm: 'oral capsule (325 mg; 500 mg)',
        drugClass: 'Miscellaneous analgesics',
        lastUpdated: new Date('2020/01/01'),
      },
      {
        id: 2,
        genericName: 'Cocaine (Topical)',
        brandNames: 'C-Topical',
        dosageForm: 'powder capsule (1 mg)',
        drugClass: 'Temporary class drugs',
        lastUpdated: new Date('2017-01-01'),
      },
      {
        id: 3,
        genericName: 'Cyclobenzaprine',
        brandNames: 'Amrix',
        dosageForm: 'oral capsule (5 mg; 10 mg)',
        drugClass: 'Skeletal muscle relaxants',
        lastUpdated: new Date('2019-01-01'),
      },
    ];
  }
  listeDrugs(): drugs[] {
    return this.drugs;
  }
  ajouterDrug(item: drugs) {
    this.drugs.push(item);
  }
  // supprimer drug
  supprimerDrug(d: drugs) {
    const index = this.drugs.indexOf(d, 0);
    if (index > -1) {
      this.drugs.splice(index, 1);
    }
  }

  drug!: drugs;
  consulterDrug(id: number): drugs {
    this.drug = this.drugs.find((d) => d.id == id)!;
    return this.drug;
  }

  updateDrug(d: drugs) {
    // console.log(p);
    this.supprimerDrug(d);
    this.ajouterDrug(d);
  }

  trierDrugs() {
    this.drugs = this.drugs.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }
}
