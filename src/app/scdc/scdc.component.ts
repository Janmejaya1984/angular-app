import { Component } from '@angular/core';

@Component({
  selector: 'app-scdc',
  templateUrl: './scdc.component.html',
  styleUrls: ['./scdc.component.css']
})
export class ScdcComponent {
  choice = 0;
  nextChoice() {
    this.choice++;
  }
}
