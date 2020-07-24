import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ag10Test';
  testVariable: string;
  testNumber: number;

  functionAdd(somma: number): number{
    console.log('Change');
    return somma += 2;
  }


}
