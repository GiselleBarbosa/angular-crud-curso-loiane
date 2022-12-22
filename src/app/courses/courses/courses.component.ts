import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'frontend'}
  ];  
  displayedColumns = ['name', 'category']; // lista de colunas a serem exibidas


  constructor() {
    // this.courses = []; // alternativa para inicializar a tipagem da variavel
  }

  ngOnInit(): void {
  }
}
