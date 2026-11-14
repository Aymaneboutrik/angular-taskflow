import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

interface TaskItem {
  id: number;
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {

  tasks: TaskItem[] = [
    {
      id: 1,
      title: 'apprendre angular',
      dueDate: '2026-11-20'
    },
    {
      id: 2,
      title: 'créer un composant',
      dueDate: '2026-11-22'
    },
    {
      id: 3,
      title: 'pratiquer typescript',
      dueDate: '2026-11-25'
    }
  ];

  clearTasks() {
    this.tasks = [];
  }

}