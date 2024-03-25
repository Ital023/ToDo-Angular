import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  toDoList = [
    {name:'Fazer um projeto em spring boot'},
    {name:'Estudar angular'},
    {name:'Realizar atividades da faculdade'},
  ]
  
}
