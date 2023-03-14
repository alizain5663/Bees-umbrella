import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public toggleActive:Boolean = false;
  public toggleOpen:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showNavHeader() {
    this.toggleActive = !this.toggleActive;
    this.toggleOpen = !this.toggleOpen;
  }

}
