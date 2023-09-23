import { ActionReducerMap } from "@ngrx/store";
import { todoReducer, TodoState } from "./todo/todo.reducer";

export interface RootState {
  readonly todo: TodoState;
}

const reducers: ActionReducerMap<RootState> = { 
  todo: todoReducer
};