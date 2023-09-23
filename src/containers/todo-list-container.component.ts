import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../state/todo/todo.actions';
import { TodoListSkeletonComponent } from '../components/todo-list/todo-list-skeleton.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { RootState } from '../state/state';

@Component({
  selector: 'app-todo-list-container',
  standalone: true,
  imports: [CommonModule, TodoListComponent, TodoListSkeletonComponent],
  template: `
    <app-todo-list *ngIf="!loading()" [items]="items()"></app-todo-list>
    <app-todo-list-skeleton *ngIf="loading()"></app-todo-list-skeleton>
  `
})
export class TodoListContainerComponent {
  store: Store<RootState> = inject(Store);
  items = this.store.selectSignal(state => state.todo.items);
  loading = this.store.selectSignal(state => state.todo.loading);

  constructor() {
    this.store.dispatch(loadItems());
  }
}