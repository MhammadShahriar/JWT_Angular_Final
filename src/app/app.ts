import { Component, signal } from '@angular/core';

import { RouterOutlet, RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [RouterOutlet, ButtonModule, TableModule, CommonModule, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Shahriar Demo2233');

users = [
    {
      id: 1,
      name: 'Shahriar',
      age: 35,
      nationality: 'Bangladeshi'
    },
    {
      id: 2,
      name: 'Rahim',
      age: 30,
      nationality: 'Bangladeshi'
    },
    {
      id: 3,
      name: 'Karim',
      age: 28,
      nationality: 'Bangladeshi'
    }
  ];
}
