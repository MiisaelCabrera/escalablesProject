import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tab: number = 1;

  constructor(private router: Router) { }

  public getIsCartoonsPage(): boolean {
    return this.router.url === '/cartoons';
  }
}
