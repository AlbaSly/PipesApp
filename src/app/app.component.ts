import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title = 'pipes app';

  constructor(
    private readonly _primeNgConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
      this._primeNgConfig.ripple = true;
  }
}
