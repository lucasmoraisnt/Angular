import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  //Os dados que serão preenchidos nas variáveis iram vir do banco de dados
  name = "Lucas";
  idade: number = 18
  trab = 'Programador'

  constructor() { }

  ngOnInit(): void {
  }

}
