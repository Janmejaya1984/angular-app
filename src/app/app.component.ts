import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchString:string = "Searching ......";
  imgUrl:string = "assets/imgs/1.jfif";
  message="This is a message from attribute directive!";
  isBordered=false;
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}

