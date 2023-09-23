import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodoItem } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <h1>You have {{items.length}} items!</h1>
    <mat-card *ngFor="let item of items" class="item">
      <mat-card-content [style.textDecoration]="item.completed ? 'line-through' : null">
        {{ item.title }}
      </mat-card-content>
    </mat-card>
  `,
  styles: [':host {display: block; padding: 10px} .item {margin-bottom: 5px}']
})
export class TodoListComponent {
  @Input({required: true}) items: TodoItem[] = [];
}