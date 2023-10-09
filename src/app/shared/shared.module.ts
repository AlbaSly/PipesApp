import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    MenuComponent,
    MenubarComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    MenuComponent,
    MenubarComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortPipe,
  ]
})
export class SharedModule { }
