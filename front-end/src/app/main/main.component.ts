import { Component, OnInit } from '@angular/core';
import { faCalculator, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  hide: boolean = true
  projects: Array<any> = [
    { link: "table", icon: faCalculator, name: "Employee" },
    { link: "calculadora", icon: faUsers, name: "Calculator" }
  ]
  faCalculator = faCalculator

  constructor() { }

  ngOnInit(): void {
  }

}
