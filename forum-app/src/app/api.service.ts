import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTheme(themeId: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${themeId}`);
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  createTheme(themeName: string, postText: string) {
    const { apiUrl } = environment;

    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }
}
