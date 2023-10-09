import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLowercase: string = "raxel";
  public nameUppercase: string = "RAXEL";
  public fullName: string = "BrAnDO RAXel";
  
  public customDate: Date = new Date();
}
