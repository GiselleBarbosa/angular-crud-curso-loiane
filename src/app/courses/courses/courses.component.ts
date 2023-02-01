import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { Observable } from "rxjs/internal/Observable";

import { Course } from "../model/course";
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category']; // lista de colunas a serem exibidas

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog) {
    this.courses$ = this.CoursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Lista de cursos não encontrada.');
          return of([]);
        })
      );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {

  }
}
