import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [2,4];
  onlyOdd = false;
  status = 1;
  toggleNumbers () {
    this.onlyOdd = !this.onlyOdd;
    if(this.onlyOdd)  {
      this.numbers = [1,3,5];
    } else {
      this.numbers = [2,4];
    }
  }
}
