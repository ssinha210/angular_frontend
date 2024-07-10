import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { ApplyComponent } from './apply/apply.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'house', component: HousesComponent },
    { path: 'apply', component: ApplyComponent },



];
