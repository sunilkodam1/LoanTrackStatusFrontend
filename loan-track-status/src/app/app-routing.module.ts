import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTrackComponent } from './loan-track/loan-track.component';

const routes: Routes = [ 
  {path:'' , component:LoanTrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
