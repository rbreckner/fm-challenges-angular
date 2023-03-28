import {Component, HostBinding} from '@angular/core';
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
  @HostBinding('class') colorScheme: 'light' | 'dark' = 'dark'

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
    },
    {
      title: 'Read for 1 hour',
      status: 'active'
    },
    {
      title: 'Pick up groceries',
      status: 'active'
    },
    {
      title: 'Complete Todo App on Frontend Mentor',
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

  draggingIndex: number | null = null;

  private _reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.todos.splice(fromIndex, 1)[0];
    this.todos.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
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

  toggleColorScheme() {
    if (this.colorScheme === 'light') {
      this.colorScheme = 'dark';
    } else {
      this.colorScheme = 'light';
    }
  }


  onDragEnter(index: number) {
    if (this.draggingIndex !== null && this.draggingIndex !== index) {
      this._reorderItem(this.draggingIndex, index);
    }
  }

  onDragEnd() {
    this.draggingIndex = null;
  }

  onDragStart(index: number) {
    this.draggingIndex = index;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
