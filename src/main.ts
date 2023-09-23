import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Route, RouterOutlet } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { todoReducer } from './state/todo/todo.reducer';
import { TodoListContainerComponent } from './containers/todo-list-container.component';
import { provideEffects } from '@ngrx/effects';
import * as todoEffects from './state/todo/todo.effects';
import { provideHttpClient } from '@angular/common/http';

const routes: Route[] = [{
  path: '',
  component: TodoListContainerComponent
}];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideStore({ todo: todoReducer }),
    provideRouterStore(),
    provideRouter(routes),
    provideEffects({
      ...todoEffects
    }),
    provideHttpClient()
  ]
});
