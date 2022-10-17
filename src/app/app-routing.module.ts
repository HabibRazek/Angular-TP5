import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDrugsComponent } from './add-drugs/add-drugs.component';
import { DrugsComponent } from './drugs/drugs.component';
import { UpdateDrugComponent } from './update-drug/update-drug.component';

const routes: Routes = [
  // add drugs component
  { path: 'drugs', component: DrugsComponent },
  // add add-drugs component
  { path: 'add-drugs', component: AddDrugsComponent },
  // add default drugs component
  { path: '', redirectTo: '/drugs', pathMatch: 'full' },
  // add update drug component
  { path: 'update-drug/:id', component: UpdateDrugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
