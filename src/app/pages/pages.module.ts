import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class PagesModule { }
