import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  public name:string = "Raxel";
  public gender: 'male' | 'female' = "male";

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void {
    this.name = this.name === "Lucy" ? "Raxel" : "Lucy";
    this.gender = this.gender === "female" ? "male" : "female";
  }

  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Natalia'];
  public clientsMap = {
    '=0': 'la lista de espera está vacía.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando...',
  }

  public completeDelivery(): void {
    this.clients.shift();
  }

  public resetClientsList(): void {
    this.clients = ['María', 'Pedro', 'Fernando', 'Natalia'];
  }

  public person = {
    name: "Raxel",
    age: 21,
    address: "Siempreviva, USA."
  }

  public myObservableTimer = interval(1000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise data completed');
    }, 3500);
  });
}
