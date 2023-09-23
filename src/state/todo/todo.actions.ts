import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../../models/todo';

export const loadItems = createAction('[Todo] Load items');
export const loadItemsSuccess = createAction(
  '[Todo] Load items success',
  props<{ items: TodoItem[] }>()
);
export const loadItemsFailure = createAction('[Todo] Load items failed');
