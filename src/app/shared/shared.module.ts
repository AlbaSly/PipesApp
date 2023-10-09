import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    MenuComponent,
    MenubarComponent,
  ]
})
export class SharedModule { }
