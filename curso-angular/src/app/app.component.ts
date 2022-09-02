import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";

  userData={
    email: 'luksmnt1101@gmail.com',
    role: 'Admin',
  }

  title = 'curso-angular';
}
