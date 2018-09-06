import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mi aplicación de angular';
  urlImagen="https://angular.io/generated/images/guide/architecture/databinding.png";
  
  
  
  mostrarAlerta()
  {
    console.log("Alerta");
  }
}


