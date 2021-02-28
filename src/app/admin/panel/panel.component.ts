import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../login/login-service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  select: boolean[] = [true];
  constructor(private auth: AuthenticationService, private router: Router) { }
  ngOnInit() { }

  public viewSummary(): void {
    this.select = [];
    this.select[0] = true;
  }
  public viewDepartment(): void {
    this.select = [];
    this.select[1] = true;
  }

  public viewUser(): void {
    this.select = [];
    this.select[2] = true;
  }
  public viewProject(): void {
    this.select = [];
    this.select[3] = true;
  }
  public viewOptions(): void {
    this.select = [];
    this.select[4] = true;
  }
  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  public scroll(id: string): void {
    const htmlElement = document.getElementById(id);
    htmlElement.scrollIntoView({behavior: 'smooth'});
   }
}
