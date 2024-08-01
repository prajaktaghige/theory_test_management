import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'written_system';
  isLoggedIn:number=0;
  userid:number=0;
  baseUrl='http://localhost:8081/';

}
