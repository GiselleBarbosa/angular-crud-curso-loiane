import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { tap } from "rxjs/internal/operators/tap";
import { delay, first, take } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      // take(1), // apos receber a resposta do servidor, a conexão da inscricao é finalizada 
      first(), // obtem apenas a 1 resposta do servidor 
      delay(1500),
      tap(courses => console.log(courses))
    );
  }
}
