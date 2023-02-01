import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

interface Categories {
  category: string;
  viewCategory: string;
}


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  categories: Categories[] = [
    { category: '', viewCategory: 'selecione um valor' },
    { category: 'front-end', viewCategory: 'Front-End' },
    { category: 'back-end', viewCategory: 'Back-End' },
    { category: 'full-stack', viewCategory: 'Full-Stack' },
  ];

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', 'Fechar', { duration: 3000 });
  }

}
