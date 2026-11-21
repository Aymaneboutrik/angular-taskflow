import { Component, input, output } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { TitleColorPipe } from '../title-color-pipe';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe, TitleCasePipe, TitleColorPipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})

export class TaskCard {

  // Recevoir une tâche depuis le parent
  task = input.required<TaskItem>();

  // Envoyer un événement au parent
  completed = output<number>();

  // Signaler que la tâche est terminée
  markDone() {
    this.completed.emit(this.task().id);
  }

}
7
