import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../../models/todo';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './todo.actions';

export interface TodoState {
  readonly items: TodoItem[];
  readonly loading: boolean;
}

export const initialState: TodoState = {
  items: [],
  loading: true
};

export const todoReducer = createReducer(
  initialState,
  on(loadItems, state => ({
    ...state,
    loading: true
  })),
  on(loadItemsSuccess, (state, {items}) => ({
    ...state,
    items,
    loading: false
  })),
  on(loadItemsFailure, state => ({
    ...state,
    loading: false
  }))
);