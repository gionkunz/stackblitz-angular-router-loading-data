import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { TodoItem } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient);

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      delay(2000)
    );
  }
}