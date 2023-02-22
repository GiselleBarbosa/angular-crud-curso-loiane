import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, of } from 'rxjs';
import { Observable } from "rxjs/internal/Observable";

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from "../../model/course";
import { CoursesService } from '../../services/courses.service';
23
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;


  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Course){
    this.router.navigate(['edit', course._id], { relativeTo: this.route });

  }

}
