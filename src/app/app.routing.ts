import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ElimisComponent } from './elimis/elimis.component';
import { HowAreWe2Component } from './how-are-we2/how-are-we2.component';
import { HowaAreWe1Component } from './howa-are-we1/howa-are-we1.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const myRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'HUR1', component: HowaAreWe1Component },
  { path: 'HUR2', component: HowAreWe2Component },
  { path: 'join', component: ElimisComponent },
  { path: 'WWD', component: WhatWeDoComponent },
  { path: 'SOL', component: OurSolutionsComponent },
  { path: 'CASE', component: CaseStudiesComponent },
];
export const TEST_ROUTING = RouterModule.forRoot(myRoutes);
