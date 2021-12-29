import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from  '../service/student.service'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  name: string = '';
  password: string = '';

  constructor(private router: Router, private form: FormBuilder,private std:StudentService) {
    this.loginForm = this.form.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getLogin(): void {
    this.name = this.loginForm.get('name')?.value;
    this.password = this.loginForm.get('password')?.value;
    if (this.name === 'Dinesh' && this.password === 'Dinesh@123') {
      sessionStorage.setItem('userName', this.name);
      this.loginForm.reset();
      alert('Successfully Loggedin');
      this.router.navigate(['/main']);
      this.std.isUserLoggedIn.next(true);
    } else {
      alert('enter a valid name and password');
    }
  }

  ngOnInit(): void {}
}
