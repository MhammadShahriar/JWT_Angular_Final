import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

import { ActivatedRoute } from '@angular/router';
@Component({
  imports: [ButtonModule, TableModule, CommonModule],
  standalone: true,
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);

  users:any[] = [];

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/login']);
  }

  //constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {

    this.users = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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


}
