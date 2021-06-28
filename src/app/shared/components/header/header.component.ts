import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/header.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menu: Menu[];
  public currentUrl: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu = [];
    this.currentUrl = this.router.url;
  }

  public goTo(url): void {
    this.router.navigate([url], { queryParamsHandling: 'preserve' });
  }
}
