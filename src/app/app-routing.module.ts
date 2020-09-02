import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFileComponent } from './list-file/list-file.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
 { path: '', component: BlankComponent },
 { path: 'assets', component: BlankComponent },
 { path: 'assets/:asset_id', component: ListFileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
