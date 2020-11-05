import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFileComponent } from './list-file/list-file.component';
import { BlankComponent } from './blank/blank.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListFileComponent } from './list-file/list-file.component';
import { BlankComponent } from './blank/blank.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './list-file/details/details.component';
import { WidgetComponent } from './widget/widget.component';

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
