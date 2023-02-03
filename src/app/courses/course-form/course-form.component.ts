import { Location } from '@angular/common';
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
    { category: 'Front-end', viewCategory: 'Front-end' },
    { category: 'Back-end', viewCategory: 'Back-end' }
  ];

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();

  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', 'Fechar', { duration: 5000 });
    this.onCancel();

  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', 'Fechar', { duration: 5000 });
  }

}
