import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-detailed-theme',
  templateUrl: './detailed-theme.component.html',
  styleUrls: ['./detailed-theme.component.css'],
})
export class DetailedThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.fetchTheme();
  }
  fetchTheme(): void {
    const id = this.activeRoute.snapshot.params['themeId'];

    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
    });
  }
}
