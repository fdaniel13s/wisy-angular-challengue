import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioButton} from "@angular/material/radio";


@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [MatButtonModule, MatRadioButton],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

  constructor(private router:Router) {
  }

  navigateTo(forecastCity: string) {
    this.router.navigate(['/forecast/', forecastCity]);
  }
}
