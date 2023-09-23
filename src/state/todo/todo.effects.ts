import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { loadItems, loadItemsFailure, loadItemsSuccess } from './todo.actions';

export const loadTodoItems = createEffect((
  actions$ = inject(Actions),
  todoService = inject(TodoService)
) => actions$.pipe(
    ofType(loadItems),
    switchMap(() => todoService.getTodos().pipe(
      map((items) => loadItemsSuccess({ items })),
      catchError(() => of(loadItemsFailure()))
    ))
  ), { functional: true }
);