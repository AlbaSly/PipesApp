import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  
  public items: Array<MenuItem> = [];

  ngOnInit(): void {
    this.items = [
      {
        label: "Pipes de Angular",
        icon: "pi pi-desktop",
        items: [
          {
            label: "Textos y Fechas",
            icon: "pi pi-align-left",
            routerLink: "/"
          },
          {
            label: "Números",
            icon: "pi pi-dollar",
            routerLink: "/numbers"
          },
          {
            label: "No comunes",
            icon: "pi pi-globe",
            routerLink: "/uncommon"
          }
        ]
      },
      {
        label: "Pipes personalizados",
        icon: "pi pi-cog",
        items: [
          {
            label: "Otro elemento",
            icon: "pi pi-cog",
            routerLink: '/custom',
          }
        ]
      }
    ];
  }

}
