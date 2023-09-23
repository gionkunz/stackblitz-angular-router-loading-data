import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-todo-list-skeleton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  template: `
    <ngx-skeleton-loader
      class="title"
      count="1"
      [theme]="{ 'border-radius': '0', width: '300px', height: '70px' }">
    </ngx-skeleton-loader>
    <ngx-skeleton-loader
      count="5"
      [theme]="{ 'border-radius': '0', height: '50px' }">
    </ngx-skeleton-loader>
  `,
  styles: [':host {display: block; padding: 10px} .title {margin-bottom: 0.67em}']
})
export class TodoListSkeletonComponent {}