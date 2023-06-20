import {  AfterViewInit, Component } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  constructor() { }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0); // Renderizar hacia arriba de la pantalla
  }

  
  
}
