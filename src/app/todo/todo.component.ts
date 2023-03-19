import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

export interface Todo {
  title: string;
  status: 'active' | 'completed';
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [
    {
      title: 'Complete online JavaScript course',
      status: 'completed'
    },
    {
      title: 'Jog around the park 3x',
      status: 'active'
    },
    {
      title: '10 minutes meditation',
      status: 'active'
    }
  ]

  newTodoTitle = '';
  filter: 'all' | 'active' | 'completed' = 'all';

  get filteredTodos() {
    return this.todos.filter(x => {
      if (this.filter === 'all') {
        return true;
      } else if (this.filter === 'active' && x.status === 'active') {
        return true;
      } else if (this.filter === 'completed' && x.status === 'completed') {
        return true;
      }
      return false;
    })
  }

  get remaining() {
    return this.todos.filter(x => x.status === 'active').length;
  }

  constructor(private title: Title) {
    title.setTitle('todo');
  }

  toggleTodoStatus(todo: Todo) {
    if (todo.status === 'active') {
      todo.status = 'completed';
    } else if (todo.status === 'completed') {
      todo.status = 'active';
    }
  }

  createTodo() {
    this.todos = [
      ...this.todos,
      {
        title: this.newTodoTitle,
        status: 'active'
      }
    ];
    this.newTodoTitle = '';
  }

  clearCompleted() {
    this.todos = this.todos.filter(x => x.status !== 'completed');
  }
}
