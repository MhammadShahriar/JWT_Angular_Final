import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';

// @Component({
//   imports: [],
//   selector: 'app-login',
//   styleUrl: './login.css',
//   templateUrl: './login.html',
// })
//export class Login {}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrl: './login.css',
  templateUrl: './login.html'
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = false;
  errorMessage = '';

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe({

        next: response => {

          console.log('Login successful');

          this.router.navigate(['/home']);
        },

        error: error => {

          console.error('Login failed:', error);

          this.errorMessage =
            error?.error?.message ||
            'Invalid username or password.';

          this.isLoading = false;
        },

        complete: () => {
          this.isLoading = false;
        }
      });
  }
}
