import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Err404Component } from './err404/err404.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"HOME"},
  {path:"portfolio",component:PortfolioComponent,title:"PORTFOLIO"},
  {path:"about",component:AboutComponent,title:"ABOUT"},
  {path:"contact",component:ContactComponent,title:"CONTACT US"},
  {path:"**",component:Err404Component ,title:"404 NOT FOUND"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
