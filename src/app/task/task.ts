import { Component, signal, computed } from '@angular/core';
import { TaskCard } from './task-card/task-card';
import { TaskItem } from './task-item';

@Component({
  selector: 'app-task',
  imports: [TaskCard],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {

  // Signal contenant la liste des tâches
  tasks = signal<TaskItem[]>([
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
      title: 'lire',
      dueDate: '2026-11-25'
    }
  ]);

  // Compteur automatique
  count = computed(() => this.tasks().length);

  // Ajouter une tâche
  addTask() {

    const newTask: TaskItem = {
      id: Date.now(),
      title: 'nouvelle tâche',
      dueDate: '2026-11-30'
    };

    this.tasks.update(items => [...items, newTask]);

  }

  // Vider la liste
  clearTasks() {
    this.tasks.set([]);
  }

  // Recevoir l'événement du composant enfant
  onCompleted(taskId: number) {

    this.tasks.update(items =>
      items.filter(task => task.id !== taskId)
    );

  }

}