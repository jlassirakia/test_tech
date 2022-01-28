import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HowaAreWe1Component } from './howa-are-we1/howa-are-we1.component';
import { HowAreWe2Component } from './how-are-we2/how-are-we2.component';
import { TEST_ROUTING } from './app.routing';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';

import { CmmunityComponent } from './cmmunity/cmmunity.component';
import { ElimisComponent } from './elimis/elimis.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OurPrecingComponent } from './our-precing/our-precing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    HowaAreWe1Component,
    HowAreWe2Component,
    WhatWeDoComponent,
    WhyChooseUsComponent,
    OurSolutionsComponent,
    CaseStudiesComponent,
    OurTeamComponent,
    WhoAreWeComponent,

    CmmunityComponent,
    ElimisComponent,
    OurPrecingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TEST_ROUTING,
    CarouselModule.forRoot(),

    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
