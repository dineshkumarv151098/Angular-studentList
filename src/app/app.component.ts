import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../app/service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  sessionUsername = sessionStorage.getItem('userName');
  constructor(private route: Router, private std: StudentService) {
    this.std.isUserLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }
  ngOnInit(): void {}
  logOut() {
    if (confirm('Do you want to logout?')) {
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('studentName');
      this.route.navigate([`/main`]);
      this.isLoggedIn = false;
      return true;
    } else {
      return false;
    }
  }
}
