import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// add forms module
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsComponent } from './drugs/drugs.component';
import { AddDrugsComponent } from './add-drugs/add-drugs.component';
import { UpdateDrugComponent } from './update-drug/update-drug.component';

@NgModule({
  declarations: [AppComponent, DrugsComponent, AddDrugsComponent, UpdateDrugComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add forms module
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
